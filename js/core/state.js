/**
 * Gestor Central de Estado Reactivo
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { loadAttemptHistory, saveAttemptRecordToStorage, loadUserPreferences, saveUserPreferences } from "./history-storage.js";
import { 
  createContinuousSession, 
  advanceContinuousSession, 
  accumulateContinuousResults 
} from "./continuous-session.js";
import { getMissedQuestions } from "./quiz-engine.js";

class QuizState {
  constructor() {
    this.listeners = [];
    this.history = loadAttemptHistory();

    const userPrefs = loadUserPreferences();

    // Estado inicial
    this.state = {
      activeSubjectId: "ing-calidad",
      activeUnitId: "parcial-1",
      activeQuizId: "quiz-p1-completo",
      executionMode: "batches", // "batches" | "full" | "random"
      batchSize: 10,
      randomCount: 4,
      shuffleQuestions: userPrefs.shuffleQuestions ?? true,
      shuffleOptions: userPrefs.shuffleOptions ?? true,
      theme: userPrefs.theme || "dark",
      activeQuestionIndex: 0,
      paginationMode: "all",
      quizStatus: "intro",    // "intro" | "attempt" | "summary" | "review"
      currentQuestions: [],
      userAnswers: {},       // { [questionId]: ["optionId", ...] }
      flaggedQuestions: new Set(),
      startTime: null,
      finishTime: null,
      elapsedSeconds: 0,
      results: null,
      vaultOpen: false,
      continuousSession: null,
      isRetryMode: false,
      lastMissedQuestions: []
    };

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  getState() {
    return { ...this.state };
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.getState());
      } catch (err) {
        console.error("Error en suscriptor de estado:", err);
      }
    }
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notify();
  }

  setAnswer(questionId, optionId, isMultiple = false) {
    const current = this.state.userAnswers[questionId] ? [...this.state.userAnswers[questionId]] : [];
    let updated;

    if (isMultiple) {
      updated = current.includes(optionId) 
        ? current.filter(id => id !== optionId) 
        : [...current, optionId];
    } else {
      updated = [optionId];
    }

    this.setState({
      userAnswers: { ...this.state.userAnswers, [questionId]: updated }
    });
  }

  clearAnswer(questionId) {
    const newAnswers = { ...this.state.userAnswers };
    delete newAnswers[questionId];
    this.setState({ userAnswers: newAnswers });
  }

  toggleFlag(questionId) {
    const flags = new Set(this.state.flaggedQuestions);
    if (flags.has(questionId)) {
      flags.delete(questionId);
    } else {
      flags.add(questionId);
    }
    this.setState({ flaggedQuestions: flags });
  }

  startAttempt(questions) {
    this.setState({
      currentQuestions: questions,
      userAnswers: {},
      flaggedQuestions: new Set(),
      activeQuestionIndex: 0,
      quizStatus: "attempt",
      startTime: new Date(),
      finishTime: null,
      elapsedSeconds: 0,
      results: null,
      isRetryMode: false
    });
  }

  startRetryAttempt(questions) {
    this.setState({
      currentQuestions: [...questions],
      userAnswers: {},
      flaggedQuestions: new Set(),
      activeQuestionIndex: 0,
      quizStatus: "attempt",
      startTime: new Date(),
      finishTime: null,
      elapsedSeconds: 0,
      results: null,
      isRetryMode: true,
      continuousSession: null
    });
  }

  goToSummary() {
    this.setState({ quizStatus: "summary" });
  }

  resumeAttempt() {
    this.setState({ quizStatus: "attempt" });
  }

  setExecutionMode(mode) {
    if (["batches", "full", "random"].includes(mode)) {
      this.setState({ executionMode: mode });
    }
  }

  setBatchSize(size) {
    const num = Math.max(1, parseInt(size, 10) || 10);
    this.setState({ batchSize: num });
  }

  setRandomCount(count) {
    const num = Math.max(1, parseInt(count, 10) || 4);
    this.setState({ randomCount: num });
  }

  setShuffleQuestions(shuffle) {
    const val = Boolean(shuffle);
    this.setState({ shuffleQuestions: val });
    saveUserPreferences({ shuffleQuestions: val });
  }

  setShuffleOptions(shuffle) {
    const val = Boolean(shuffle);
    this.setState({ shuffleOptions: val });
    saveUserPreferences({ shuffleOptions: val });
  }

  setTheme(theme) {
    const val = theme === "light" ? "light" : "dark";
    this.setState({ theme: val });
    saveUserPreferences({ theme: val });
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", val);
      try { localStorage.setItem("baul_cuestionarios_theme", val); } catch {}
    }
  }

  toggleTheme() {
    this.setTheme(this.state.theme === "dark" ? "light" : "dark");
  }

  startContinuousSession(questionsPool, batchSize = 10, options = {}) {
    const shuffleQuestions = options.shuffleQuestions ?? this.state.shuffleQuestions ?? true;
    const shuffleOptions = options.shuffleOptions ?? this.state.shuffleOptions ?? true;
    const { session, firstBatch } = createContinuousSession(questionsPool, batchSize, { shuffleQuestions, shuffleOptions });
    this.setState({
      continuousSession: session,
      batchSize: session.batchSize,
      currentQuestions: firstBatch,
      userAnswers: {},
      flaggedQuestions: new Set(),
      activeQuestionIndex: 0,
      quizStatus: "attempt",
      startTime: new Date(),
      finishTime: null,
      elapsedSeconds: 0,
      results: null,
      isRetryMode: false
    });
  }

  nextContinuousBatch() {
    const result = advanceContinuousSession(this.state.continuousSession);
    if (!result) return;

    this.setState({
      continuousSession: result.updatedSession,
      currentQuestions: result.nextBatch,
      userAnswers: {},
      flaggedQuestions: new Set(),
      activeQuestionIndex: 0,
      quizStatus: "attempt",
      startTime: new Date(),
      finishTime: null,
      elapsedSeconds: 0,
      results: null
    });
  }

  finishAttempt(evaluationResults) {
    const finishTime = new Date();
    let updatedSession = null;

    if (this.state.continuousSession?.active) {
      updatedSession = accumulateContinuousResults(
        this.state.continuousSession,
        this.state.currentQuestions.length,
        evaluationResults,
        this.state.currentQuestions
      );
    }

    const missed = getMissedQuestions({
      ...this.state,
      results: evaluationResults,
      ...(updatedSession ? { continuousSession: updatedSession } : {})
    });

    this.setState({
      quizStatus: "review",
      finishTime,
      results: evaluationResults,
      lastMissedQuestions: missed,
      ...(updatedSession ? { continuousSession: updatedSession } : {})
    });

    this.saveAttemptRecord({
      quizId: this.state.activeQuizId,
      subjectId: this.state.activeSubjectId,
      unitId: this.state.activeUnitId,
      date: finishTime.toISOString(),
      score: Number(evaluationResults.score ?? evaluationResults.totalPoints ?? 0),
      maxScore: Number(evaluationResults.maxScore ?? evaluationResults.maxPoints ?? 0),
      percentage: evaluationResults.percentage,
      timeTaken: evaluationResults.timeTaken
    });
  }

  exitReview() {
    this.setState({
      quizStatus: "intro",
      currentQuestions: [],
      userAnswers: {},
      flaggedQuestions: new Set(),
      results: null,
      continuousSession: null,
      isRetryMode: false
    });
  }

  toggleVault(forceState) {
    this.setState({
      vaultOpen: typeof forceState === 'boolean' ? forceState : !this.state.vaultOpen
    });
  }

  saveAttemptRecord(record) {
    this.history = saveAttemptRecordToStorage(this.history, record);
  }

  getAttemptsForQuiz(quizId) {
    return this.history.filter(h => h.quizId === quizId);
  }
}

export const state = new QuizState();
