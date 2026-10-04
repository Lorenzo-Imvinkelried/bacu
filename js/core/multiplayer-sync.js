/**
 * Orquestador de Sincronización Multijugador
 * Responsabilidad: Conectar eventos de red con el estado central (state.js) y la UI de cursores/halos
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { state } from "./state.js";
import { multiplayerService } from "./multiplayer-service.js";
import { updatePeerCursor, removePeerCursor, clearAllCursors } from "../components/multiplayer-cursors.js";
import { setupLocalCursorTracking, renderPeerSelectionBadges } from "../components/multiplayer-dom.js";
import { reconstructPreparedQuestions, serializeQuestionsForRoom, getSharedMultiplayerQuestions } from "./multiplayer-questions.js";
import { checkIfBothAnsweredQuick, handleMultiplayerNextQuick, handlePlayerReadyNext, readyNextMap } from "./multiplayer-duel.js";

export { getSharedMultiplayerQuestions, handleMultiplayerNextQuick, readyNextMap };

let isRemoteUpdateInProgress = false;
export const peerSelectionsMap = new Map();

export function initMultiplayerSync() {
  multiplayerService.on("peer_cursor", (msg) => {
    updatePeerCursor(msg.senderId, msg.user?.name, msg.user?.color, msg.coords);
  });

  multiplayerService.on("peer_left", (userId) => {
    removePeerCursor(userId);
    for (const [, optMap] of peerSelectionsMap.entries()) {
      for (const [optId, u] of Object.entries(optMap)) {
        if (u.id === userId) delete optMap[optId];
      }
    }
    refreshPeerSelectionBadgesInDom();
  });

  multiplayerService.on("room_left", () => {
    clearAllCursors();
    peerSelectionsMap.clear();
    readyNextMap.clear();
    refreshPeerSelectionBadgesInDom();
    state.notify();
  });

  multiplayerService.on("room_connected", (evt) => {
    if (evt?.roomData && !evt.isHost) applyRoomDataToState(evt.roomData);
    state.notify();
  });

  multiplayerService.on("room_updated", (roomData) => {
    if (roomData && !multiplayerService.currentRoom?.isHost) applyRoomDataToState(roomData);
    if (roomData?.quizState?.selections) syncSelectionsFromFirestore(roomData.quizState.selections);
    state.notify();
  });

  multiplayerService.on("remote_answer", (msg) => {
    const { questionId, optionId, isMultiple, user } = msg;
    if (!peerSelectionsMap.has(questionId)) peerSelectionsMap.set(questionId, {});
    const qMap = peerSelectionsMap.get(questionId);
    if (!isMultiple) Object.keys(qMap).forEach(k => delete qMap[k]);
    qMap[optionId] = { id: msg.senderId, name: user?.name || "Compañero", color: user?.color || "#0070f3" };

    const room = multiplayerService.getCurrentRoom();
    if (room) {
      if (!room.quizState) room.quizState = {};
      if (!room.quizState.selections) room.quizState.selections = {};
      if (!room.quizState.selections[questionId]) room.quizState.selections[questionId] = {};
      room.quizState.selections[questionId][msg.senderId] = {
        userId: msg.senderId,
        userName: user?.name || "Compañero",
        userColor: user?.color || "#0070f3",
        optionId
      };
    }

    checkIfBothAnsweredQuick(questionId);
    state.notify();
    refreshPeerSelectionBadgesInDom();
  });

  multiplayerService.on("remote_quick_evaluate", (msg) => {
    if (msg?.questionId) state.evaluateQuickQuestion(msg.questionId);
  });

  multiplayerService.on("remote_navigate", (msg) => {
    isRemoteUpdateInProgress = true;
    try {
      if (typeof msg.index === "number") state.goToQuestion(msg.index);
    } finally { isRemoteUpdateInProgress = false; }
  });

  multiplayerService.on("remote_ready_next", (msg) => {
    handlePlayerReadyNext(msg.questionIndex, msg.userId);
  });

  multiplayerService.on("remote_start_quiz", (msg) => {
    handleRemoteStartQuiz(msg);
  });

  multiplayerService.on("remote_next_batch", (msg) => {
    isRemoteUpdateInProgress = true;
    try {
      if (msg.continuousSession) {
        state.setState({
          continuousSession: msg.continuousSession,
          currentQuestions: msg.currentQuestions || state.state.currentQuestions,
          userAnswers: {},
          quizStatus: "attempt",
          activeQuestionIndex: 0
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        state.nextContinuousBatch();
      }
    } finally { isRemoteUpdateInProgress = false; }
  });

  setupLocalCursorTracking((coords) => {
    if (multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({ type: "CURSOR", user: multiplayerService.localUser, coords });
    }
  });

  decorateStateMethods();
}

export function syncSelectionsFromFirestore(selections) {
  const localId = multiplayerService.localUser?.id;
  const room = multiplayerService.getCurrentRoom();
  if (room) {
    if (!room.quizState) room.quizState = {};
    room.quizState.selections = { ...(room.quizState.selections || {}), ...selections };
  }

  for (const [qId, userMap] of Object.entries(selections)) {
    if (!peerSelectionsMap.has(qId)) peerSelectionsMap.set(qId, {});
    const qMap = peerSelectionsMap.get(qId);
    for (const [uId, sel] of Object.entries(userMap)) {
      if (uId !== localId) {
        qMap[sel.optionId] = { id: uId, name: sel.userName, color: sel.userColor };
      }
    }
  }
  refreshPeerSelectionBadgesInDom();
  const currQ = state.state.currentQuestions[state.state.activeQuestionIndex];
  if (currQ) checkIfBothAnsweredQuick(currQ.id);
}

function handleRemoteStartQuiz(msg) {
  isRemoteUpdateInProgress = true;
  try {
    const { config, preparedQuestions, continuousSession } = msg;
    if (config) {
      state.setState({
        activeSubjectId: config.subjectId || state.state.activeSubjectId,
        activeUnitId: config.unitId || state.state.activeUnitId,
        activeQuizId: config.quizId || state.state.activeQuizId,
        executionMode: config.executionMode || state.state.executionMode,
        batchSize: config.batchSize || state.state.batchSize,
        randomCount: config.randomCount || state.state.randomCount
      });
    }

    if (preparedQuestions?.length > 0) {
      const reconstructed = reconstructPreparedQuestions(preparedQuestions);
      if (config.executionMode === "batches" && continuousSession) {
        state.setState({
          currentQuestions: reconstructed,
          quizStatus: "attempt",
          continuousSession,
          userAnswers: {},
          activeQuestionIndex: 0,
          startTime: new Date()
        });
      } else if (config.executionMode === "quick") {
        state.startQuickAttempt(reconstructed);
      } else {
        state.startAttempt(reconstructed);
      }
    }
  } finally { isRemoteUpdateInProgress = false; }
}

function applyRoomDataToState(roomData) {
  if (!roomData) return;
  isRemoteUpdateInProgress = true;
  try {
    const config = roomData.config || {};
    const quizState = roomData.quizState || {};
    const updates = {};

    if (config.subjectId) updates.activeSubjectId = config.subjectId;
    if (config.unitId) updates.activeUnitId = config.unitId;
    if (config.quizId) updates.activeQuizId = config.quizId;
    if (config.executionMode) updates.executionMode = config.executionMode;
    if (config.batchSize) updates.batchSize = config.batchSize;
    if (config.randomCount) updates.randomCount = config.randomCount;

    if (roomData.preparedQuestions?.length > 0) {
      updates.currentQuestions = reconstructPreparedQuestions(roomData.preparedQuestions);
    }
    if (quizState.quizStatus) updates.quizStatus = quizState.quizStatus;
    if (typeof quizState.activeQuestionIndex === "number") {
      updates.activeQuestionIndex = quizState.activeQuestionIndex;
    }
    state.setState(updates);
  } finally { isRemoteUpdateInProgress = false; }
}

export function refreshPeerSelectionBadgesInDom() {
  renderPeerSelectionBadges(peerSelectionsMap);
}

function decorateStateMethods() {
  const origSetAnswer = state.setAnswer.bind(state);
  state.setAnswer = function(qId, optId, isMultiple = false) {
    origSetAnswer(qId, optId, isMultiple);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      const room = multiplayerService.getCurrentRoom();
      if (room) {
        if (!room.quizState) room.quizState = {};
        if (!room.quizState.selections) room.quizState.selections = {};
        if (!room.quizState.selections[qId]) room.quizState.selections[qId] = {};
        room.quizState.selections[qId][multiplayerService.localUser.id] = {
          userId: multiplayerService.localUser.id,
          userName: multiplayerService.localUser.name,
          userColor: multiplayerService.localUser.color,
          optionId: optId
        };
      }
      multiplayerService.broadcastMessage({
        type: "SET_ANSWER",
        questionId: qId,
        optionId: optId,
        isMultiple,
        options: state.state.userAnswers[qId],
        user: multiplayerService.localUser
      });
      checkIfBothAnsweredQuick(qId);
    }
  };

  const origGoToQuestion = state.goToQuestion.bind(state);
  state.goToQuestion = (index) => {
    origGoToQuestion(index);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({ type: "NAVIGATE", index });
    }
  };

  const origStartAttempt = state.startAttempt.bind(state);
  state.startAttempt = (q) => { origStartAttempt(q); broadcastStartIfNeeded("full", q); };

  const origStartQuickAttempt = state.startQuickAttempt.bind(state);
  state.startQuickAttempt = (q) => { origStartQuickAttempt(q); broadcastStartIfNeeded("quick", q); };

  const origStartContinuousSession = state.startContinuousSession.bind(state);
  state.startContinuousSession = function(allQuestions, batchSize, options) {
    origStartContinuousSession(allQuestions, batchSize, options);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      const s = state.getState();
      multiplayerService.broadcastMessage({
        type: "START_QUIZ",
        config: { executionMode: "batches", batchSize, subjectId: s.activeSubjectId, unitId: s.activeUnitId, quizId: s.activeQuizId },
        continuousSession: s.continuousSession,
        preparedQuestions: serializeQuestionsForRoom(s.currentQuestions)
      });
    }
  };

  const origNextContinuousBatch = state.nextContinuousBatch.bind(state);
  state.nextContinuousBatch = function() {
    origNextContinuousBatch();
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      const s = state.getState();
      multiplayerService.broadcastMessage({
        type: "NEXT_BATCH",
        continuousSession: s.continuousSession,
        currentQuestions: s.currentQuestions
      });
    }
  };
}

function broadcastStartIfNeeded(mode, questions) {
  if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
    const s = state.getState();
    multiplayerService.broadcastMessage({
      type: "START_QUIZ",
      config: { executionMode: mode, subjectId: s.activeSubjectId, unitId: s.activeUnitId, quizId: s.activeQuizId },
      preparedQuestions: serializeQuestionsForRoom(questions)
    });
  }
}
