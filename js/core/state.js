/**
 * Gestor Central de Estado Reactivo
 * Cumple estrictamente con directivas en AGENTS.md (Capa de Lógica y Estado, < 300 líneas)
 */

import { loadAttemptHistory, saveAttemptRecordToStorage, loadUserPreferences, saveUserPreferences } from "./history-storage.js";
import { createContinuousSession, advanceContinuousSession, accumulateContinuousResults } from "./continuous-session.js";
import { getMissedQuestions } from "./quiz-engine.js";

class QuizState {
  constructor() {
    this.listeners = [];
    this.history = loadAttemptHistory();
    const userPrefs = loadUserPreferences();

    this.state = {
      activeSubjectId: "ing-calidad",
      activeUnitId: "parcial-1",
      activeQuizId: "quiz-p1-completo",
      executionMode: "batches", // "batches" | "full" | "random" | "quick"
      batchSize: 10,
      randomCount: 4,
      shuffleQuestions: userPrefs.shuffleQuestions ?? true,
      shuffleOptions: userPrefs.shuffleOptions ?? true,
      theme: userPrefs.theme || "light",
      activeQuestionIndex: 0,
      paginationMode: "all",
      quizStatus: "intro",    // "intro" | "attempt" | "summary" | "review"
      currentQuestions: [],
      userAnswers: {},       // { [questionId]: ["optionId", ...] }
      flaggedQuestions: new Set(),
      quickEvaluatedQuestions: new Set(),
      quickViewMode: "single", // "single" | "list"
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
    return () => { this.listeners = this.listeners.filter(cb => cb !== callback); };
  }

  notify() {
    for (const listener of this.listeners) {
      try { listener(this.getState()); } catch (err) { console.error("Error en suscriptor de estado:", err); }
    }
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notify();
  }

  setAnswer(questionId, optionId, isMultiple = false) {
    const current = this.state.userAnswers[questionId] ? [...this.state.userAnswers[questionId]] : [];
    const updated = isMultiple
      ? (current.includes(optionId) ? current.filter(id => id !== optionId) : [...current, optionId])
      : [optionId];

    const updates = { userAnswers: { ...this.state.userAnswers, [questionId]: updated } };

    // En Modo Repaso Rápido, opciones únicas evalúan inmediatamente al primer tap
    if (this.state.executionMode === "quick" && !isMultiple) {
      const qSet = new Set(this.state.quickEvaluatedQuestions || []);
      qSet.add(questionId);
      updates.quickEvaluatedQuestions = qSet;
    }

    this.setState(updates);
  }

  evaluateQuickQuestion(questionId) {
    const qSet = new Set(this.state.quickEvaluatedQuestions || []);
    qSet.add(questionId);
    this.setState({ quickEvaluatedQuestions: qSet });
  }

  clearAnswer(questionId) {
    const newAnswers = { ...this.state.userAnswers };
    delete newAnswers[questionId];
    this.setState({ userAnswers: newAnswers });
  }

  toggleFlag(questionId) {
    const flags = new Set(this.state.flaggedQuestions);
    if (flags.has(questionId)) flags.delete(questionId); else flags.add(questionId);
    this.setState({ flaggedQuestions: flags });
  }

  _initAttemptState(overrides = {}) {
    return {
      userAnswers: {},
      flaggedQuestions: new Set(),
      quickEvaluatedQuestions: new Set(),
      activeQuestionIndex: 0,
      quizStatus: "attempt",
      startTime: new Date(),
      finishTime: null,
      elapsedSeconds: 0,
      results: null,
      isRetryMode: false,
      continuousSession: null,
      ...overrides
    };
  }

  startAttempt(questions) {
    this.setState(this._initAttemptState({ currentQuestions: questions }));
  }

  startQuickAttempt(questions) {
    this.setState(this._initAttemptState({
      currentQuestions: questions,
      executionMode: "quick",
      quickViewMode: "single"
    }));
  }

  startRetryAttempt(questions) {
    this.setState(this._initAttemptState({
      currentQuestions: [...questions],
      isRetryMode: true
    }));
  }

  goToNextQuestion() {
    if (this.state.activeQuestionIndex < this.state.currentQuestions.length - 1) {
      this.setState({ activeQuestionIndex: this.state.activeQuestionIndex + 1 });
    }
  }

  goToPrevQuestion() {
    if (this.state.activeQuestionIndex > 0) {
      this.setState({ activeQuestionIndex: this.state.activeQuestionIndex - 1 });
    }
  }

  goToQuestion(index) {
    const idx = Math.max(0, Math.min(this.state.currentQuestions.length - 1, index));
    this.setState({ activeQuestionIndex: idx });
  }

  setQuickViewMode(mode) {
    this.setState({ quickViewMode: mode === "list" ? "list" : "single" });
  }

  goToSummary() { this.setState({ quizStatus: "summary" }); }
  resumeAttempt() { this.setState({ quizStatus: "attempt" }); }

  setExecutionMode(mode) {
    if (["batches", "full", "random", "quick"].includes(mode)) {
      this.setState({ executionMode: mode });
    }
  }

  setBatchSize(size) {
    this.setState({ batchSize: Math.max(1, parseInt(size, 10) || 10) });
  }

  setRandomCount(count) {
    this.setState({ randomCount: Math.max(1, parseInt(count, 10) || 4) });
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
    this.setState(this._initAttemptState({
      continuousSession: session,
      batchSize: session.batchSize,
      currentQuestions: firstBatch
    }));
  }

  nextContinuousBatch() {
    const result = advanceContinuousSession(this.state.continuousSession);
    if (!result) return;
    this.setState(this._initAttemptState({
      continuousSession: result.updatedSession,
      currentQuestions: result.nextBatch
    }));
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
      quickEvaluatedQuestions: new Set(),
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
