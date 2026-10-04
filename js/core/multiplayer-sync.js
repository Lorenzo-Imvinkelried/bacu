/**
 * Orquestador de Sincronización Multijugador
 * Responsabilidad: Conectar eventos de red con el estado central (state.js) y la UI de cursores/halos
 * Cumple con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { state } from "./state.js";
import { multiplayerService } from "./multiplayer-service.js";
import { updatePeerCursor, removePeerCursor, clearAllCursors } from "../components/multiplayer-cursors.js";
import { setupLocalCursorTracking, renderPeerSelectionBadges } from "../components/multiplayer-dom.js";
import { QUESTION_BANK } from "../data/question-bank.js";

let isRemoteUpdateInProgress = false;
export const peerSelectionsMap = new Map();

/**
 * Inicializar observadores y puentes de sincronización
 */
export function initMultiplayerSync() {
  multiplayerService.on("peer_cursor", (msg) => {
    updatePeerCursor(msg.senderId, msg.user?.name, msg.user?.color, msg.coords);
  });

  multiplayerService.on("peer_left", (userId) => {
    removePeerCursor(userId);
    let updated = false;
    for (const [, optMap] of peerSelectionsMap.entries()) {
      for (const [optId, u] of Object.entries(optMap)) {
        if (u.id === userId) { delete optMap[optId]; updated = true; }
      }
    }
    if (updated) refreshPeerSelectionBadgesInDom();
  });

  multiplayerService.on("room_left", () => {
    clearAllCursors();
    peerSelectionsMap.clear();
    refreshPeerSelectionBadgesInDom();
    state.notify();
  });

  multiplayerService.on("room_connected", (evt) => {
    if (evt?.roomData && !evt.isHost) {
      applyRoomDataToState(evt.roomData);
    }
    state.notify();
  });

  multiplayerService.on("room_updated", (roomData) => {
    if (roomData && !multiplayerService.currentRoom?.isHost) {
      applyRoomDataToState(roomData);
    }
    state.notify();
  });

  multiplayerService.on("remote_answer", (msg) => {
    isRemoteUpdateInProgress = true;
    try {
      const { questionId, optionId, isMultiple, user } = msg;
      if (!peerSelectionsMap.has(questionId)) peerSelectionsMap.set(questionId, {});
      const qMap = peerSelectionsMap.get(questionId);
      if (!isMultiple) Object.keys(qMap).forEach(k => delete qMap[k]);
      qMap[optionId] = { id: msg.senderId, name: user?.name || "Compañero", color: user?.color || "#0070f3" };

      state.setAnswer(questionId, optionId, isMultiple);
      refreshPeerSelectionBadgesInDom();
    } finally {
      isRemoteUpdateInProgress = false;
    }
  });

  multiplayerService.on("remote_navigate", (msg) => {
    isRemoteUpdateInProgress = true;
    try {
      if (typeof msg.index === "number") {
        state.goToQuestion(msg.index);
        const targetEl = document.getElementById(msg.scrollTarget || `question-card-${msg.index}`);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } finally {
      isRemoteUpdateInProgress = false;
    }
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
    } finally {
      isRemoteUpdateInProgress = false;
    }
  });

  multiplayerService.on("remote_quick_evaluate", (msg) => {
    isRemoteUpdateInProgress = true;
    try {
      if (msg.questionId) state.evaluateQuickQuestion(msg.questionId);
    } finally {
      isRemoteUpdateInProgress = false;
    }
  });

  setupLocalCursorTracking((coords) => {
    if (multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({
        type: "CURSOR",
        user: multiplayerService.localUser,
        coords
      });
    }
  });

  decorateStateMethods();
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

    if (preparedQuestions && preparedQuestions.length > 0) {
      const reconstructed = reconstructPreparedQuestions(preparedQuestions);
      if (config.executionMode === "batches" && continuousSession) {
        state.setState({
          currentQuestions: reconstructed,
          quizStatus: "attempt",
          continuousSession: continuousSession,
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
  } finally {
    isRemoteUpdateInProgress = false;
  }
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

    if (roomData.preparedQuestions && roomData.preparedQuestions.length > 0) {
      updates.currentQuestions = reconstructPreparedQuestions(roomData.preparedQuestions);
    }
    if (quizState.quizStatus) updates.quizStatus = quizState.quizStatus;
    if (typeof quizState.activeQuestionIndex === "number") {
      updates.activeQuestionIndex = quizState.activeQuestionIndex;
    }
    if (quizState.userAnswers) updates.userAnswers = { ...quizState.userAnswers };

    state.setState(updates);
  } finally {
    isRemoteUpdateInProgress = false;
  }
}

function reconstructPreparedQuestions(serializedList) {
  const bankMap = new Map(QUESTION_BANK.map(q => [q.id, q]));
  const result = [];
  for (const item of serializedList) {
    const orig = bankMap.get(item.id);
    if (!orig) continue;
    let orderedOptions = orig.options || [];
    if (item.optionsOrder && item.optionsOrder.length > 0) {
      const optMap = new Map(orig.options.map(o => [o.id, o]));
      orderedOptions = item.optionsOrder.map(optId => optMap.get(optId)).filter(Boolean);
    }
    result.push({ ...orig, options: orderedOptions });
  }
  return result;
}

export function refreshPeerSelectionBadgesInDom() {
  renderPeerSelectionBadges(peerSelectionsMap);
}

function decorateStateMethods() {
  const origSetAnswer = state.setAnswer.bind(state);
  state.setAnswer = function(qId, optId, isMultiple = false) {
    origSetAnswer(qId, optId, isMultiple);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({
        type: "SET_ANSWER",
        questionId: qId,
        optionId: optId,
        isMultiple,
        options: state.state.userAnswers[qId],
        user: multiplayerService.localUser
      });
    }
  };

  const origGoToQuestion = state.goToQuestion.bind(state);
  state.goToQuestion = function(index) {
    origGoToQuestion(index);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({ type: "NAVIGATE", index });
    }
  };

  const origEvaluateQuick = state.evaluateQuickQuestion.bind(state);
  state.evaluateQuickQuestion = function(qId) {
    origEvaluateQuick(qId);
    if (!isRemoteUpdateInProgress && multiplayerService.isInRoom()) {
      multiplayerService.broadcastMessage({
        type: "QUICK_EVALUATE",
        questionId: qId,
        evaluatedList: Array.from(state.state.quickEvaluatedQuestions || [])
      });
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
        preparedQuestions: (s.currentQuestions || []).map(q => ({ id: q.id, num: q.num, optionsOrder: q.options?.map(o => o.id) || [] }))
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
      preparedQuestions: (questions || []).map(q => ({ id: q.id, num: q.num, optionsOrder: q.options?.map(o => o.id) || [] }))
    });
  }
}
