const { QUESTIONS_PER_GAME, allQuestions, scenarioQuestions } = globalThis.RABBIT_SAVVY_QUESTION_DATA;
;

function inferTopic(question) {
    const text = `${question.prompt} ${question.fact || ""}`.toLowerCase();
    if (/gene|genotype|allele|agouti|chinchilla|vienna|rufus|harlequin|brindling|broken pattern|charlie/.test(text)) return "Genetics";
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen/.test(text)) return "ARBA Procedures";
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|biofilm/.test(text)) return "Health & Biosecurity";
    if (/body type|fur type|moon eye|breed|pose|dutch rabbit|flemish/.test(text)) return "Breeds & Judging";
    return "Husbandry";
}

function inferStudyTrack(question) {
    const text = `${question.prompt} ${question.fact || ""}`.toLowerCase();
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen/.test(text)) {
        return "registrar";
    }
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|palpate|homozygous|heterozygous|genotype|allele|vienna|charlie/.test(text)) {
        return "senior";
    }
    if (/gene|agouti|chinchilla|rufus|harlequin|brindling|kindling|gestation|breeding record|body type|moon eye|full-arch|fur type|dutch rabbit/.test(text)) {
        return "intermediate";
    }
    if (/daily diet|fresh water|lift a show rabbit|daily observation|wire floors|trim nails/.test(text)) {
        return "cloverbud";
    }
    return "junior";
}

const sourceQuestions = [...allQuestions, ...scenarioQuestions];
const latestQuestionByPrompt = new Map();
sourceQuestions.forEach((question) => latestQuestionByPrompt.set(question.prompt, question));

const questionBank = sourceQuestions
    .filter((question) => latestQuestionByPrompt.get(question.prompt) === question)
    .map((question, index) => ({
        ...question,
        id: question.id || `question-${index + 1}`,
        topic: question.topic || inferTopic(question),
        studyTrack: question.studyTrack || inferStudyTrack(question),
        source: question.source || (inferTopic(question) === "ARBA Procedures" ? "Practice question | ARBA procedures" : "Practice question | General husbandry guidance"),
        reviewStatus: question.reviewStatus || "Practice content - verify current guidance",
    }));

const STUDY_TRACKS = ["cloverbud", "junior", "intermediate", "senior", "registrar"];

const STUDY_PATH_ACCESS = {
    mixed: { topics: TOPICS, tracks: STUDY_TRACKS },
    cloverbud: { topics: ["Husbandry", "Health & Biosecurity"], tracks: ["cloverbud"] },
    junior: { topics: ["Husbandry", "Health & Biosecurity", "Genetics"], tracks: ["cloverbud", "junior"] },
    intermediate: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate"] },
    senior: { topics: TOPICS, tracks: ["cloverbud", "junior", "intermediate", "senior"] },
    registrar: { topics: TOPICS, tracks: STUDY_TRACKS },
};

function validateQuestionBank() {
    const ids = new Set();
    const problems = [];
    questionBank.forEach((question) => {
        if (!question.id || ids.has(question.id)) problems.push(`duplicate or missing id: ${question.id || question.prompt}`);
        ids.add(question.id);
        const hasValidOptions = Array.isArray(question.options) && question.options.length >= 2;
        if (!question.prompt || !hasValidOptions) problems.push(`incomplete question: ${question.id}`);
        if (!hasValidOptions || !Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) problems.push(`invalid correct answer: ${question.id}`);
        if (!TOPICS.includes(question.topic)) problems.push(`invalid topic: ${question.id}`);
        if (!STUDY_TRACKS.includes(question.studyTrack)) problems.push(`invalid study track: ${question.id}`);
        const isReachable = Object.entries(STUDY_PATH_ACCESS)
            .filter(([path]) => path !== "mixed")
            .some(([, access]) => access.topics.includes(question.topic) && access.tracks.includes(question.studyTrack));
        if (!isReachable) problems.push(`unreachable question: ${question.id}`);
    });
    if (problems.length) throw new Error(`Question bank validation failed:\n${problems.join("\n")}`);
}

validateQuestionBank();

const nonRegistrarQuestions = questionBank.filter((question) => question.studyTrack !== "registrar");
const freeQuestionIds = new Set([
    ...TOPICS.flatMap((topic) => nonRegistrarQuestions.filter((question) => question.topic === topic).slice(0, 10)),
].map((question) => question.id));

const questionText = document.getElementById("question");
const questionCard = document.getElementById("question-card");
const optionsList = document.getElementById("options");
const factBox = document.getElementById("fact");
const progress = document.getElementById("progress");
const celebration = document.getElementById("celebration");
const form = document.getElementById("answer-form");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const recapPanel = document.getElementById("recap-panel");
const summaryNote = document.getElementById("summary-note");
const summaryList = document.getElementById("summary-list");
const readiness = document.getElementById("readiness");
const historySection = document.getElementById("study-history");
const historySummary = document.getElementById("history-summary");
const studyMode = document.getElementById("study-mode");
const roundSize = document.getElementById("round-size");
const studyTrack = document.getElementById("study-track");
const chooseStudyLevelsButton = document.getElementById("choose-study-levels");
const studyTrackFilters = document.getElementById("study-track-filters");
const studyLevelsModal = document.getElementById("study-levels-modal");
const closeStudyLevelsModalButton = document.getElementById("close-study-levels-modal");
const startRoundButton = document.getElementById("start-round");
const topicFilters = document.getElementById("topic-filters");
const printReportButton = document.getElementById("print-report");
const confidenceFieldset = document.getElementById("confidence");
const confidenceHelpButton = document.getElementById("confidence-help");
const confidenceModal = document.getElementById("confidence-modal");
const closeConfidenceModalButton = document.getElementById("close-confidence-modal");
const tutorialModal = document.getElementById("tutorial-modal");
const closeTutorialModalButton = document.getElementById("close-tutorial-modal");
const tutorialHelpButton = document.getElementById("tutorial-help");
const upgradePanel = document.getElementById("upgrade-panel");
const upgradeDetails = document.getElementById("upgrade-details");
const upgradeButton = document.getElementById("upgrade-button");
const restorePurchaseButton = document.getElementById("restore-purchase");
const purchaseStatus = document.getElementById("purchase-status");
const questionBankCount = document.getElementById("question-bank-count");

function loadStats() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return { ...DEFAULT_STATS, ...stored, history: Array.isArray(stored.history) ? stored.history : [], misses: Array.isArray(stored.misses) ? stored.misses : [], recentQuestionIds: Array.isArray(stored.recentQuestionIds) ? stored.recentQuestionIds : [], topicResults: stored.topicResults || {} };
    } catch {
        return { ...DEFAULT_STATS };
    }
}

let stats = loadStats();
let questions = [];
let answersLog = [];
let currentIndex = 0;
let currentScore = 0;
let waitingForNext = false;
let roundComplete = false;
let roundPaused = false;
let celebrationTimeoutId;
const betaFullAccess = false;
let hasFullAccess = localStorage.getItem(FULL_ACCESS_STORAGE_KEY) === "true";

function saveStats() { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }
function selectedTopics() { return [...topicFilters.querySelectorAll("input:checked")].map((input) => input.value); }
function currentMode() { return studyMode.value; }
function currentStudyTrack() { return studyTrack.value; }
function selectedStudyTracks() {
    return currentStudyTrack() === "mixed"
        ? [...studyTrackFilters.querySelectorAll("input:checked")].map((input) => input.value)
        : currentPathAccess().tracks;
}
function selectedRoundSize(availableCount) { return roundSize.value === "all" ? availableCount : Number(roundSize.value); }

function currentPathAccess() { return STUDY_PATH_ACCESS[currentStudyTrack()]; }

function updateStudyTrackFilters() {
    chooseStudyLevelsButton.hidden = currentStudyTrack() !== "mixed";
}

function showStudyLevelsModal() {
    studyLevelsModal.hidden = false;
    studyLevelsModal.setAttribute("aria-hidden", "false");
    closeStudyLevelsModalButton.focus();
}

function hideStudyLevelsModal() {
    studyLevelsModal.hidden = true;
    studyLevelsModal.setAttribute("aria-hidden", "true");
}

function updateTopicFilters(selectAllAvailable = false) {
    const pathAccess = currentPathAccess();
    const availableTopics = new Set(availableQuestions()
        .filter((question) => selectedStudyTracks().includes(question.studyTrack) && pathAccess.topics.includes(question.topic))
        .map((question) => question.topic));
    const topicInputs = [...topicFilters.querySelectorAll("input")];

    topicInputs.forEach((input) => {
        input.disabled = !availableTopics.has(input.value);
        if (input.disabled) input.checked = false;
    });
    if (selectAllAvailable || !topicInputs.some((input) => input.checked && !input.disabled)) {
        topicInputs.filter((input) => !input.disabled).forEach((input) => { input.checked = true; });
    }
}

function eligibleQuestions() {
    const topics = selectedTopics();
    const pathAccess = currentPathAccess();
    const matchingQuestions = availableQuestions().filter((question) =>
        topics.includes(question.topic)
        && pathAccess.topics.includes(question.topic)
        && selectedStudyTracks().includes(question.studyTrack)
    );
    return currentMode() === "review"
        ? matchingQuestions.filter((question) => stats.misses.includes(question.id))
        : matchingQuestions;
}

function updateQuestionBankCount() {
    if (!questionBankCount) return;
    const pathAccess = currentPathAccess();
    const accessibleCount = availableQuestions().filter((question) =>
        pathAccess.topics.includes(question.topic)
        && selectedStudyTracks().includes(question.studyTrack)
    ).length;
    const pathLabel = studyTrack.selectedOptions[0]?.textContent.trim() || "selected study path";
    questionBankCount.textContent = currentStudyTrack() === "mixed"
        ? `${accessibleCount} questions available in the selected study levels. ${questionBank.length} questions in Rabbit Savvy.`
        : `${accessibleCount} questions available for ${pathLabel}. ${questionBank.length} questions in Rabbit Savvy.`;
}

function updateRoundAvailability() {
    const availableCount = eligibleQuestions().length;
    [...roundSize.options].forEach((option) => {
        option.disabled = option.value !== "all" && Number(option.value) > availableCount;
    });
    if (currentMode() === "review" && availableCount > 0 && roundSize.selectedOptions[0].disabled) {
        roundSize.value = "all";
    }
    startRoundButton.textContent = "Start Round";
    startRoundButton.disabled = availableCount === 0 || roundSize.selectedOptions[0].disabled;
    updateQuestionBankCount();
}

function showTutorial() {
    tutorialModal.hidden = false;
    tutorialModal.setAttribute("aria-hidden", "false");
    closeTutorialModalButton.focus();
}

function hideTutorial() {
    tutorialModal.hidden = true;
    tutorialModal.setAttribute("aria-hidden", "true");
    localStorage.setItem(TUTORIAL_SEEN_STORAGE_KEY, "true");
}

function availableQuestions() {
    return hasFullAccess ? questionBank : questionBank.filter((question) => freeQuestionIds.has(question.id));
}

function updateUpgradePanel() {
    if (!upgradePanel || !upgradeDetails || !upgradeButton || !restorePurchaseButton) return;
    const lockedQuestionCount = questionBank.length - freeQuestionIds.size;
    const registrarOption = studyTrack.querySelector('option[value="registrar"]');
    registrarOption.disabled = !hasFullAccess;
    upgradePanel.classList.toggle("unlocked", hasFullAccess);
    upgradeDetails.textContent = hasFullAccess
        ? betaFullAccess
            ? `Beta access is on: all ${questionBank.length} questions are ready to test.`
            : `Full Question Bank unlocked: all ${questionBank.length} questions are ready to study.`
        : `Unlock Rabbit Savvy's comprehensive, independently authored study companion for exhibitors, breeders, and serious rabbit people. Explore structured rabbit knowledge across care, health, genetics, ARBA procedures, and breeds and judging - all available offline. Includes ${lockedQuestionCount} more questions for one payment of $14.99, lifetime access, and no subscription.`;
    upgradeButton.hidden = hasFullAccess;
    restorePurchaseButton.hidden = hasFullAccess;
    updateTopicFilters();
    updateRoundAvailability();
}

function grantFullAccess() {
    hasFullAccess = true;
    localStorage.setItem(FULL_ACCESS_STORAGE_KEY, "true");
    if (purchaseStatus) purchaseStatus.textContent = "Full Question Bank unlocked. Thank you for supporting HopNCode.";
    updateUpgradePanel();
}

function playStore() {
    return window.CdvPurchase?.store;
}

function initializeBilling() {
    if (betaFullAccess) return;
    const purchase = window.CdvPurchase;
    const store = playStore();
    if (!purchase || !store) return;

    store.register({
        id: FULL_ACCESS_PRODUCT_ID,
        type: purchase.ProductType.NON_CONSUMABLE,
        platform: purchase.Platform.GOOGLE_PLAY,
    });
    store.when().approved((transaction) => transaction.verify());
    store.when().verified((receipt) => {
        grantFullAccess();
        receipt.finish();
    });
    store.error((error) => {
        if (purchaseStatus) purchaseStatus.textContent = error.message || "The purchase could not be completed. Please try again.";
    });
    store.initialize([purchase.Platform.GOOGLE_PLAY]);
}

function beginPurchase() {
    const purchase = window.CdvPurchase;
    const store = playStore();
    if (!purchase || !store) {
        if (purchaseStatus) purchaseStatus.textContent = "Purchases are available in the Google Play version of the app.";
        return;
    }
    const product = store.get(FULL_ACCESS_PRODUCT_ID, purchase.Platform.GOOGLE_PLAY);
    const offer = product?.getOffer();
    if (!offer) {
        if (purchaseStatus) purchaseStatus.textContent = "The Full Question Bank is not available yet. Please try again shortly.";
        return;
    }
    offer.order();
}

function restorePurchase() {
    const store = playStore();
    if (!store) {
        if (purchaseStatus) purchaseStatus.textContent = "Restore purchases from the Google Play version of the app.";
        return;
    }
    store.restorePurchases();
    if (purchaseStatus) purchaseStatus.textContent = "Checking your previous Google Play purchases...";
}

function topicKey(topic) {
    return topic.toLowerCase().replace(/[ &]+/g, "-");
}

function stopCelebration() {
    clearTimeout(celebrationTimeoutId);
    celebration.classList.remove("show");
    celebration.querySelectorAll(".bonus-bunny").forEach((bunny) => bunny.remove());
}

function playCelebration() {
    const colorSets = [
        ["#ffeef7", "#f5c4d6"],
        ["#f2ffdf", "#c9ec7f"],
        ["#e5f2ff", "#7ac5ff"],
        ["#ffe7d8", "#ffb07a"],
        ["#f0e2ff", "#c09dff"],
        ["#e3fff6", "#6fe3c7"],
        ["#fff3e1", "#ffcd82"],
    ];
    for (let index = 0; index < 16; index += 1) {
        const bunny = document.createElement("span");
        const [bodyBase, accentColor] = colorSets[Math.floor(Math.random() * colorSets.length)];
        bunny.className = "bunny bonus-bunny";
        bunny.style.left = `${4 + Math.random() * 90}%`;
        bunny.style.bottom = `${8 + Math.random() * 58}%`;
        bunny.style.animationDelay = `${Math.random() * 1.6}s`;
        bunny.style.setProperty("--hop-scale", `${0.75 + Math.random() * 0.5}`);
        bunny.style.setProperty("--body-base", bodyBase);
        bunny.style.setProperty("--accent-color", accentColor);
        celebration.appendChild(bunny);
    }
    celebration.classList.add("show");
    clearTimeout(celebrationTimeoutId);
    celebrationTimeoutId = setTimeout(stopCelebration, 4000);
}

function shuffleQuestions(pool) {
    const shuffled = [...pool];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
}

function pickRandomQuestions(pool, count) {
    const recentIds = new Set(stats.recentQuestionIds);
    const freshQuestions = shuffleQuestions(pool.filter((question) => !recentIds.has(question.id)));
    const repeatedQuestions = shuffleQuestions(pool.filter((question) => recentIds.has(question.id)));
    return [...freshQuestions, ...repeatedQuestions].slice(0, Math.min(count, pool.length));
}

function rememberSelectedQuestions(selectedQuestions) {
    const selectedIds = selectedQuestions.map((question) => question.id);
    stats.recentQuestionIds = [...selectedIds, ...stats.recentQuestionIds.filter((id) => !selectedIds.includes(id))]
        .slice(0, RECENT_QUESTION_LIMIT);
    saveStats();
}

function setRandomBackground() {
    const backgrounds = globalThis.RABBIT_WALLPAPERS;
    let deck;
    try {
        deck = JSON.parse(localStorage.getItem(WALLPAPER_DECK_STORAGE_KEY) || "[]");
    } catch {
        deck = [];
    }
    deck = Array.isArray(deck) ? deck.filter((background) => backgrounds.includes(background)) : [];
    if (!deck.length) {
        deck = [...backgrounds];
        for (let index = deck.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
        }
        const previousBackground = localStorage.getItem(LAST_WALLPAPER_STORAGE_KEY);
        if (deck.length > 1 && deck[deck.length - 1] === previousBackground) {
            [deck[deck.length - 1], deck[deck.length - 2]] = [deck[deck.length - 2], deck[deck.length - 1]];
        }
    }
    const background = deck.pop();
    localStorage.setItem(WALLPAPER_DECK_STORAGE_KEY, JSON.stringify(deck));
    localStorage.setItem(LAST_WALLPAPER_STORAGE_KEY, background);
    document.body.style.setProperty("--game-background", `url("${background}")`);
}

function shuffleOptions(question) {
    const entries = question.options.map((text, index) => ({ text, index }));
    for (let index = entries.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [entries[index], entries[randomIndex]] = [entries[randomIndex], entries[index]];
    }
    return { ...question, options: entries.map((entry) => entry.text), correctIndex: entries.findIndex((entry) => entry.index === question.correctIndex) };
}

function updateStatsDisplay() {
    statsElement.textContent = `Best: ${stats.bestScore} | Rounds: ${stats.gamesPlayed} | Questions to review: ${stats.misses.length}`;
    const recent = stats.history.slice(-5);
    historySummary.textContent = recent.length ? `Recent scores: ${recent.map((round) => `${round.score}/${round.total}`).join(" | ")}` : "Complete a round to begin building your study history.";
}

function setAnswerLocked(locked) {
    optionsList.querySelectorAll("button").forEach((button) => { button.disabled = locked; });
}

function resetConfidence() {
    document.querySelectorAll('input[name="confidence"]').forEach((input) => { input.checked = false; });
}

function renderQuestion() {
    const question = questions[currentIndex];
    const activeTopic = topicKey(question.topic);
    progress.textContent = `Question ${currentIndex + 1} | ${currentMode() === "exam" ? "Exam Mode" : currentMode() === "review" ? "Review Mode" : "Learn Mode"}`;
    questionCard.dataset.topic = activeTopic;
    topicFilters.dataset.activeTopic = activeTopic;
    questionText.textContent = question.prompt;
    optionsList.replaceChildren();
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";
        button.textContent = `${index + 1}. ${option}`;
        button.addEventListener("click", () => submitAnswer(index));
        optionsList.appendChild(button);
    });
    factBox.textContent = "";
    feedback.textContent = "";
    feedback.className = "";
    resetConfidence();
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    waitingForNext = false;
    setAnswerLocked(false);
    updateActionButtons();
    stopCelebration();
}

function selectedConfidence() {
    return document.querySelector('input[name="confidence"]:checked')?.value || "not rated";
}

function addExplanation(question, selectedIndex, isCorrect) {
    if (currentMode() === "exam") return;
    factBox.textContent = isCorrect
        ? question.fact || ""
        : `The best answer is “${question.options[question.correctIndex]}.” ${question.fact || ""}`;
}

function submitAnswer(selectedIndex) {
    if (waitingForNext || roundComplete || roundPaused) return;
    const question = questions[currentIndex];
    if (selectedIndex < 0 || selectedIndex >= question.options.length) {
        feedback.textContent = "Choose one of the available answers.";
        return;
    }
    const isCorrect = selectedIndex === question.correctIndex;
    answersLog.push({ ...question, selectedIndex, isCorrect, confidence: selectedConfidence() });
    if (isCorrect) {
        currentScore += 1;
        playCelebration();
    } else {
        stopCelebration();
    }
    feedback.textContent = "";
    feedback.className = "";
    addExplanation(question, selectedIndex, isCorrect);
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    waitingForNext = true;
    setAnswerLocked(true);
    updateActionButtons();
}

function updateActionButtons() {
    nextButton.hidden = roundPaused || (!waitingForNext && !roundComplete);
    pauseButton.hidden = !questions.length || roundComplete;
    exitButton.hidden = !questions.length || roundComplete;
    nextButton.textContent = roundComplete ? "Start New Round" : currentIndex === questions.length - 1 ? "Finish Round" : "Next Question";
    pauseButton.textContent = roundPaused ? "Resume Round" : "Pause Round";
    exitButton.textContent = "Quit Round";
}

function pauseRound() {
    roundPaused = true;
    feedback.textContent = "Round paused. Resume when you are ready.";
    setAnswerLocked(true);
    updateActionButtons();
}

function resumeRound() {
    roundPaused = false;
    feedback.textContent = "";
    setAnswerLocked(waitingForNext);
    updateActionButtons();
}

function quitRound() {
    questions = [];
    answersLog = [];
    currentIndex = 0;
    currentScore = 0;
    waitingForNext = false;
    roundPaused = false;
    questionText.textContent = "Choose your settings and start a new round.";
    optionsList.replaceChildren();
    factBox.textContent = "";
    score.textContent = "";
    feedback.textContent = "Round quit. Your study history was not changed.";
    document.querySelector("details.collapsible-panel")?.setAttribute("open", "");
    updateActionButtons();
}

function renderSummary() {
    const misses = answersLog.filter((entry) => !entry.isCorrect);
    summaryList.replaceChildren();
    summaryNote.textContent = misses.length ? "Review these questions before your next round:" : "Congratulations! You got 100%.";
    misses.forEach((entry) => {
        const item = document.createElement("li");
        const certaintyNote = entry.confidence === "certain" ? " You marked this answer as certain, so it is a good one to revisit." : "";
        item.textContent = `${entry.topic}: ${entry.prompt} Correct answer: ${entry.options[entry.correctIndex]}.${certaintyNote} ${entry.fact || ""}`;
        summaryList.appendChild(item);
    });
    const totalAnswered = Object.values(stats.topicResults).reduce((total, result) => total + result.total, 0);
    const totalCorrect = Object.values(stats.topicResults).reduce((total, result) => total + result.correct, 0);
    readiness.textContent = totalAnswered ? `Overall readiness: ${Math.round((totalCorrect / totalAnswered) * 100)}%. Focus next on ${misses.length ? [...new Set(misses.map((entry) => entry.topic))].join(", ") : "keeping every topic sharp"}.` : "";
    recapPanel.hidden = false;
    recapPanel.open = true;
    summarySection.focus();
}

function completeRound() {
    if (roundComplete) return;
    roundComplete = true;
    waitingForNext = false;
    answersLog.forEach((entry) => {
        const topic = stats.topicResults[entry.topic] || { correct: 0, total: 0 };
        topic.total += 1;
        topic.correct += Number(entry.isCorrect);
        stats.topicResults[entry.topic] = topic;
    });
    const newMisses = answersLog.filter((entry) => !entry.isCorrect).map((entry) => entry.id);
    stats.misses = [...new Set([...stats.misses.filter((id) => !answersLog.some((entry) => entry.id === id && entry.isCorrect)), ...newMisses])];
    stats.gamesPlayed += 1;
    stats.bestScore = Math.max(stats.bestScore, currentScore);
    stats.history = [...stats.history, { score: currentScore, total: questions.length, mode: currentMode(), date: new Date().toLocaleDateString() }].slice(-20);
    saveStats();
    updateStatsDisplay();
    renderSummary();
    feedback.textContent = "Round complete.";
    setAnswerLocked(true);
    updateActionButtons();
}

function startNewGame() {
    if (!hasFullAccess && currentStudyTrack() === "registrar") {
        feedback.textContent = "The Registrar study guide is included with the Full Question Bank. Unlock it to continue.";
        return;
    }
    const pool = eligibleQuestions();
    if (!pool.length) {
        feedback.textContent = currentMode() === "review" ? "No missed questions match these filters yet. Try Learn or Exam mode." : "No questions match those filters. Try a different study path or topic.";
        return;
    }
    const requestedCount = selectedRoundSize(pool.length);
    if (pool.length < requestedCount) {
        feedback.textContent = `This setup has ${pool.length} questions. Pick a smaller round or choose more topics.`;
        return;
    }
    questions = pickRandomQuestions(pool, requestedCount);
    rememberSelectedQuestions(questions);
    questions = questions.map(shuffleOptions);
    setRandomBackground();
    currentIndex = 0;
    currentScore = 0;
    answersLog = [];
    roundComplete = false;
    roundPaused = false;
    recapPanel.hidden = true;
    renderQuestion();
}

nextButton.addEventListener("click", () => {
    if (roundComplete) return startNewGame();
    if (!waitingForNext || roundPaused) return;
    if (currentIndex === questions.length - 1) return completeRound();
    currentIndex += 1;
    waitingForNext = false;
    renderQuestion();
});
pauseButton.addEventListener("click", () => {
    if (roundPaused) resumeRound();
    else pauseRound();
});
exitButton.addEventListener("click", quitRound);
startRoundButton.addEventListener("click", startNewGame);
[studyMode, roundSize, topicFilters].forEach((control) => {
    control.addEventListener("change", updateRoundAvailability);
});
studyTrackFilters.addEventListener("change", () => {
    updateTopicFilters();
    updateRoundAvailability();
});
studyTrack.addEventListener("change", () => {
    updateStudyTrackFilters();
    updateTopicFilters(true);
    updateRoundAvailability();
    if (currentStudyTrack() === "mixed") showStudyLevelsModal();
});
chooseStudyLevelsButton.addEventListener("click", showStudyLevelsModal);
closeStudyLevelsModalButton.addEventListener("click", () => {
    hideStudyLevelsModal();
    chooseStudyLevelsButton.focus();
});
studyLevelsModal.addEventListener("click", (event) => {
    if (event.target === studyLevelsModal) hideStudyLevelsModal();
});
upgradeButton?.addEventListener("click", beginPurchase);
restorePurchaseButton?.addEventListener("click", restorePurchase);
printReportButton.addEventListener("click", () => window.print());
confidenceHelpButton.addEventListener("click", () => {
    confidenceModal.hidden = false;
    confidenceModal.setAttribute("aria-hidden", "false");
    closeConfidenceModalButton.focus();
});
closeConfidenceModalButton.addEventListener("click", () => {
    confidenceModal.hidden = true;
    confidenceModal.setAttribute("aria-hidden", "true");
    confidenceHelpButton.focus();
});
confidenceModal.addEventListener("click", (event) => {
    if (event.target === confidenceModal) {
        closeConfidenceModalButton.click();
    }
});
confidenceFieldset.addEventListener("change", () => {
    if (!waitingForNext || !answersLog.length) return;
    answersLog[answersLog.length - 1].confidence = selectedConfidence();
});
tutorialHelpButton.addEventListener("click", showTutorial);
closeTutorialModalButton.addEventListener("click", () => {
    hideTutorial();
    tutorialHelpButton.focus();
});
tutorialModal.addEventListener("click", (event) => {
    if (event.target === tutorialModal) hideTutorial();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !studyLevelsModal.hidden) {
        hideStudyLevelsModal();
        chooseStudyLevelsButton.focus();
        return;
    }
    if (event.key === "Escape" && !tutorialModal.hidden) {
        hideTutorial();
        tutorialHelpButton.focus();
        return;
    }
    if (waitingForNext || roundComplete || roundPaused || event.ctrlKey || event.metaKey || event.altKey) return;
    if (!["1", "2", "3"].includes(event.key)) return;
    const activeElement = document.activeElement;
    if (activeElement?.matches("select, input, textarea")) return;
    submitAnswer(Number(event.key) - 1);
});

document.addEventListener("deviceready", initializeBilling, { once: true });
updateUpgradePanel();
updateStudyTrackFilters();

updateStatsDisplay();
startNewGame();
if (localStorage.getItem(TUTORIAL_SEEN_STORAGE_KEY) !== "true") showTutorial();
