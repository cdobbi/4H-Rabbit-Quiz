const QUESTIONS_PER_GAME = 10;

const allQuestions = [
    {
        prompt: "What should be the foundation of a meat or show rabbit's daily diet?",
        options: [
            "High-sugar treats",
            "Unlimited grass hay with balanced pellets",
            "Only fresh garden greens",
        ],
        correctIndex: 1,
        fact:
            "Hay plus measured pellets keeps teeth worn and growth steady for meat and show stock.",
    },
    {
        prompt: "How often should working breeders plan to trim nails on their herd?",
        options: [
            "Whenever a show judge mentions it",
            "About every 4–6 weeks",
            "Only before kindling",
        ],
        correctIndex: 1,
        fact:
            "Routine trims prevent broken toes in wire cages and keep poses square on the table.",
    },
    {
        prompt: "What housing detail keeps rabbits comfortable on wire floors?",
        options: [
            "Skip wire so they never clean cages",
            "Provide resting mats or tiles on the wire",
            "Use solid wood floors that stay damp",
        ],
        correctIndex: 1,
        fact:
            "Wire keeps waste away, but resting boards let rabbits get off the mesh to protect hocks.",
    },
    {
        prompt: "When should you place a nest box for a pregnant doe?",
        options: [
            "The day breeding happens",
            "About 3–4 days before the due date",
            "After you see kits born",
        ],
        correctIndex: 1,
        fact:
            "A box lined with hay right before kindling keeps kits warm and prevents scattered litters.",
    },
    {
        prompt:
            "Both parents are black but carry the recessive chinchilla gene (Cc). What percent of kits do you expect to be chinchilla (cc)?",
        options: ["25%", "50%", "75%"],
        correctIndex: 0,
        fact:
            "A simple Punnett square for two carriers predicts one out of four kits showing the recessive color.",
    },
    {
        prompt: "How does a kit receive its coat-color genes?",
        options: [
            "Both copies come from the buck",
            "One allele comes from each parent",
            "Whichever grandparent had the darkest coat",
        ],
        correctIndex: 1,
        fact:
            "Every kit inherits two alleles per locus—one from each parent—so pedigrees pair up genes.",
    },
    {
        prompt:
            "If a heterozygous agouti (Aa) is bred to a self-colored recessive (aa), what percent of kits show the dominant agouti pattern?",
        options: ["0%", "25%", "50%"],
        correctIndex: 2,
        fact:
            "Half the kits receive the dominant A from the heterozygous parent, so about 50% present agouti.",
    },
    {
        prompt: "What is the safest way to lift a show rabbit onto the table?",
        options: [
            "Grab ears only",
            "Support chest while cradling hindquarters",
            "Scoop from the belly and swing",
        ],
        correctIndex: 1,
        fact:
            "Always support the back end to avoid powerful kicks that can injure the spine.",
    },
    {
        prompt: "Which daily observation tells you the herd is thriving?",
        options: [
            "Even feed intake and manure output",
            "How loudly they thump",
            "How much they chew cage bars",
        ],
        correctIndex: 0,
        fact:
            "Consistent appetite and droppings reveal gut health long before a rabbit shows sickness.",
    },
    {
        prompt:
            "On a 1–5 body condition scale, what score do breeders target for a show-ready rabbit?",
        options: ["2 (too lean)", "3 (ideal)", "5 (overweight)"],
        correctIndex: 1,
        fact:
            "A score of 3 means the loin feels smooth with a slight layer of flesh—ideal for posing on the table.",
    },
    {
        prompt: "What is the single most critical nutrient to keep available at all times?",
        options: ["Pellets", "Fresh water", "Salt wheels"],
        correctIndex: 1,
        fact:
            "Rabbits can skip a meal briefly, but lack of water stops digestion and milk production almost immediately.",
    },
    {
        prompt: "At how many days post-breeding can you gently palpate to confirm pregnancy?",
        options: ["5–7 days", "10–14 days", "25–30 days"],
        correctIndex: 1,
        fact:
            "Around day 12 the embryos feel like grapes or walnuts, giving breeders an early read on conception.",
    },
    {
        prompt: "When should medium-breed kits typically be weaned?",
        options: ["3 weeks", "6–7 weeks", "10 weeks"],
        correctIndex: 1,
        fact:
            "Weaning at six weeks lets kits eat pellets well while still benefiting from the doe's immunity.",
    },
    {
        prompt: "Which ventilation practice best limits ammonia buildup in a rabbitry?",
        options: [
            "Keep every window shut",
            "Use fans to pull in fresh air and exhaust stale air",
            "Spray cages with water daily",
        ],
        correctIndex: 1,
        fact:
            "Constant airflow whisks away moisture and ammonia so respiratory systems stay clear.",
    },
    {
        prompt: "How many generations must appear on a pedigree for ARBA registration?",
        options: ["Two", "Three", "Five"],
        correctIndex: 1,
        fact:
            "Registration requires a three-generation pedigree showing parents, grandparents, and great-grandparents.",
    },
    {
        prompt: "Why does ARBA require a permanent tattoo in the rabbit's left ear?",
        options: [
            "It is decorative",
            "It is the official identification that matches show paperwork",
            "It shows the rabbit's variety",
        ],
        correctIndex: 1,
        fact:
            "The tattoo number ties the rabbit to its entry card and pedigree during shows and registrations.",
    },
    {
        prompt:
            "A homozygous agouti buck (AA) bred to a self-colored doe (aa) will produce kits with which genotype?",
        options: ["All Aa, showing agouti", "All aa, showing self", "Half Aa and half aa"],
        correctIndex: 0,
        fact:
            "Agouti (A) is dominant, so every kit from AA × aa turns out agouti while carrying the recessive self gene.",
    },
    {
        prompt:
            "What phenotype results from pairing two homozygous recessive self rabbits (aa × aa)?",
        options: ["All kits agouti", "All kits self-colored", "Half agouti and half self"],
        correctIndex: 1,
        fact:
            "With only recessive alleles available, every kit receives aa and expresses the self color.",
    },
    {
        prompt: "What is a common early sign of rabbit pasteurella (snuffles)?",
        options: ["Bright clear eyes", "Sneezing with white nasal discharge", "Blue tongue"],
        correctIndex: 1,
        fact:
            "Snuffles often leaves thick white mucus on the forepaws where the rabbit wipes its nose.",
    },
    {
        prompt: "How can breeders reduce the risk of RHDV2 entering their rabbitry?",
        options: [
            "Share water crocks between barns",
            "Quarantine new or returning rabbits for 30+ days",
            "Allow visitors to handle rabbits freely",
        ],
        correctIndex: 1,
        fact:
            "Dedicated equipment and strict quarantine help keep rabbit hemorrhagic disease outside your herd.",
    },
    {
        prompt: "What is the recommended response when you suspect a contagious disease in your herd?",
        options: [
            "Sell the rabbits quickly",
            "Isolate symptomatic rabbits and call a rabbit-savvy vet",
            "Ignore it until show season",
        ],
        correctIndex: 1,
        fact:
            "Immediate isolation, sanitation, and veterinary guidance slow outbreaks and protect the colony.",
    },
    {
        prompt:
            "Which fur type features short guard hairs about half the length of normal coats, creating a plush texture?",
        options: ["Satin", "Rex", "Wool"],
        correctIndex: 1,
        fact:
            "Rex fur stands upright with very short guard hairs, so it feels like velvet when brushed backward.",
    },
    {
        prompt: "What ARBA body type describes meat breeds like the New Zealand or Californian?",
        options: ["Semi-arch", "Commercial", "Compact"],
        correctIndex: 1,
        fact:
            "Commercial body types are deep and rounded for efficient muscling and meat production.",
    },
    {
        prompt: "Flemish Giants are placed in which body type category?",
        options: ["Semi-arch", "Full-arch", "Compact"],
        correctIndex: 0,
        fact:
            "Semi-arch breeds rise slowly behind the shoulders and peak over the hips, just like the Flemish.",
    },
    {
        prompt:
            "Which ARBA grouping highlights primarily pet or fancy breeds such as Dutch or Holland Lops?",
        options: ["Commercial", "Fancy", "Meat pen"],
        correctIndex: 1,
        fact:
            "Fancy breeds are prized for their markings and personality rather than production traits.",
    },
    {
        prompt: "What does the term 'moon eye' describe in rabbit judging?",
        options: [
            "A desirable blue sheen",
            "A milky white spot or film on the eye",
            "A copper-colored iris",
        ],
        correctIndex: 1,
        fact:
            "Moon eye is a fault or disqualification caused by scarring, leaving a white opaque corneal patch.",
    },
    {
        prompt: "Which gene is required to produce blue-eyed white (BEW) rabbits?",
        options: ["Vienna gene", "Agouti gene", "Steel gene"],
        correctIndex: 0,
        fact:
            "BEW color expresses the Vienna (V) gene, while REW rabbits result from the recessive c series.",
    },
    {
        prompt: "Which of the following is recognized as a giant breed by ARBA?",
        options: ["Netherland Dwarf", "Flemish Giant", "Dutch"],
        correctIndex: 1,
        fact:
            "Flemish Giants regularly exceed 14 pounds, placing them squarely in the giant breed class.",
    },
    {
        prompt: "Which breed consistently ranks among the most popular show entries in the U.S.?",
        options: ["Holland Lop", "Silver Marten", "Belgian Hare"],
        correctIndex: 0,
        fact:
            "Holland Lops top ARBA registration lists due to their small size and friendly nature.",
    },
    {
        prompt:
            "How should you properly pose a full-arch breed like a Tan or Checkered Giant?",
        options: [
            "Press the belly to the table",
            "Let it stand naturally showing daylight under the body",
            "Stretch it flat like a rug",
        ],
        correctIndex: 1,
        fact:
            "Full-arch breeds are posed on their feet with minimal handling so the arch is visible from shoulders to hips.",
    },
    {
        prompt: "What is a 'charlie' in broken patterned rabbits?",
        options: [
            "A rabbit with no markings",
            "A broken pattern with less than 10% color",
            "Any rabbit with blue eyes",
        ],
        correctIndex: 1,
        fact:
            "Charlies have two copies of the broken gene, so they show only tiny bits of color on ears or nose.",
    },
    {
        prompt: "Which description best matches the broken pattern?",
        options: [
            "Solid coat with ticking",
            "White base with patches of color and a butterfly nose marking",
            "Only agouti banding",
        ],
        correctIndex: 1,
        fact:
            "Broken rabbits display white fur and colored patches, ideally with a butterfly marking on the muzzle.",
    },
    {
        prompt: "How should a Harlequin rabbit's color be arranged?",
        options: [
            "Random splashes everywhere",
            "Alternating bars or blocks of two colors on the face, body, and feet",
            "Solid body with colored ears",
        ],
        correctIndex: 1,
        fact:
            "Harlequins look best with alternating orange and black (or blue/chocolate/lilac) sections like a checkerboard.",
    },
    {
        prompt: "What does 'brindling' mean when judging coat color?",
        options: [
            "Evenly mixed guard hairs and undercolor",
            "Random streaks of two colors mixed together",
            "A solid self color",
        ],
        correctIndex: 1,
        fact:
            "Brindling is when two colors streak together, often seen in Harlequins and sometimes faulted if too heavy.",
    },
    {
        prompt: "Which marking error will fault a Dutch rabbit?",
        options: [
            "Straight saddle",
            "Uneven stop markings on the back feet",
            "Clean blaze",
        ],
        correctIndex: 1,
        fact:
            "Dutch stops should be even; a longer white foot on one side drops the score.",
    },
    {
        prompt: "What happens when a rabbit carries only one copy of the Vienna gene (Vv)?",
        options: [
            "It becomes albino",
            "It shows Vienna marks like white paws or nose",
            "It turns rex coated",
        ],
        correctIndex: 1,
        fact:
            "Vienna carriers often have white mittens or a snip even though they are not full blue-eyed whites.",
    },
    {
        prompt: "What does the rufus modifier add to a rabbit's coat?",
        options: ["Extra blue shading", "Warm red/orange richness", "White ticking"],
        correctIndex: 1,
        fact:
            "Rufus deepens the rusty orange tone, giving breeds like New Zealands a rich, warm color.",
    },
    {
        prompt: "Which grooming tool lifts shed undercoat during a heavy molt without breaking guard hairs?",
        options: [
            "Slicker brush with sharp wires",
            "Wide-tooth metal comb or rake",
            "Scissors to trim the coat",
        ],
        correctIndex: 1,
        fact:
            "A wide-tooth rake reaches through the topcoat and teases out loose wool while leaving guard hairs intact.",
    },
    {
        prompt: "At what temperature should breeders begin emergency cooling steps such as frozen bottles or fans?",
        options: [
            "65°F (18°C)",
            "75°F (24°C)",
            "85°F (29°C)",
        ],
        correctIndex: 2,
        fact:
            "Once air temps climb into the mid-80s, rabbits struggle to dump heat, so active cooling prevents heat stress.",
    },
    {
        prompt: "What is the average gestation length for domestic rabbits?",
        options: ["21 days", "31 days", "42 days"],
        correctIndex: 1,
        fact:
            "Most does kindle at 31 days give or take a day, so nest boxes go in around day 28.",
    },
    {
        prompt: "Which absorbent material works best in a drop pan under wire cages?",
        options: [
            "Single layer of newspaper",
            "Kiln-dried pine pellets or shavings",
            "Clay-based cat litter",
        ],
        correctIndex: 1,
        fact:
            "Pine pellets or shavings soak urine and control odor while remaining safe if chewed.",
    },
    {
        prompt: "How often should you scrub crocks or water bottles to prevent biofilm build-up?",
        options: ["Monthly", "Weekly", "Daily or every other day"],
        correctIndex: 2,
        fact:
            "Biofilm forms fast; frequent washing keeps bacteria from colonizing drinking equipment.",
    },
    {
        prompt: "What is the safest first step when a rabbit shows signs of overheating?",
        options: [
            "Immerse the rabbit in ice water",
            "Move it to a cool area and mist the ears with tepid water",
            "Feed chilled fruit treats",
        ],
        correctIndex: 1,
        fact:
            "Cooling the ears with room-temperature water and airflow drops body temperature without shocking the rabbit.",
    },
    {
        prompt: "How long should new or returning rabbits remain in quarantine before joining the herd?",
        options: ["7 days", "14 days", "30 days"],
        correctIndex: 2,
        fact:
            "A full 30-day quarantine lets hidden respiratory or GI issues appear before exposing the barn.",
    },
    {
        prompt: "What crude protein percentage do quality grower pellets supply for fryers and juniors?",
        options: ["12%", "16%", "22%"],
        correctIndex: 1,
        fact:
            "Most breeders feed a balanced 16% pellet to support muscle growth without making rabbits overly fat.",
    },
    {
        prompt: "ARBA meat-pen fryers are typically shown at what individual weight range?",
        options: [
            "3.0–3.5 lb (1.4–1.6 kg)",
            "4.5–5.5 lb (2.0–2.5 kg)",
            "6.5–7.0 lb (3.0–3.2 kg)",
        ],
        correctIndex: 1,
        fact:
            "Uniform fryers around five pounds show prime muscling and dress out efficiently.",
    },
    {
        prompt: "How should you store bagged pellets to keep nutrients intact?",
        options: [
            "Leave the bag open near the cages",
            "Seal them in a metal bin away from heat and sunlight",
            "Keep them beside lawn chemicals",
        ],
        correctIndex: 1,
        fact:
            "A sealed metal bin in a cool, dry spot keeps pellets from absorbing moisture or odors.",
    },
    {
        prompt: "How often should you check nest boxes during the first few days after kindling?",
        options: ["Once a week", "Once each day", "Only if you hear noise"],
        correctIndex: 1,
        fact:
            "Daily checks let you remove dead kits, add hay, and ensure everyone is warm and fed.",
    },
    {
        prompt: "What information belongs on a breeding record card to plan future pairings?",
        options: [
            "Only the doe's name",
            "Breeding date, buck used, due date, and litter results",
            "A full pedigree for every ancestor",
        ],
        correctIndex: 1,
        fact:
            "Recording dates, mates, and litter notes helps you spot productive crosses and schedule rebreeds.",
    },
];

/* Legacy controller retained below for reference while the study controller is initialized after it. */
/*
function pickRandomQuestions(pool, count) {
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
}

function shuffleOptions(question) {
    const optionEntries = question.options.map((text, index) => ({ text, index }));
    for (let i = optionEntries.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionEntries[i], optionEntries[j]] = [optionEntries[j], optionEntries[i]];
    }
    const shuffledOptions = optionEntries.map((entry) => entry.text);
    const newCorrectIndex = optionEntries.findIndex((entry) => entry.index === question.correctIndex);
    return {
        ...question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex,
    };
}

let questions = [];

const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const factBox = document.getElementById("fact");
const progress = document.getElementById("progress");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextButton = document.getElementById("next");
const finishedButton = document.getElementById("finished");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const summaryNote = document.getElementById("summary-note");
const summaryList = document.getElementById("summary-list");
const celebration = document.getElementById("celebration");
const farewellModal = document.getElementById("farewell-modal");
const farewellMessage = document.getElementById("farewell-message");
const closeModalButton = document.getElementById("close-modal");
const reminderToast = document.getElementById("reminder-toast");

const STORAGE_KEY = "rabbitHusbandryStats";
const DEFAULT_STATS = { bestScore: 0, gamesPlayed: 0 };

function loadStats() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return { ...DEFAULT_STATS };
        }
        const parsed = JSON.parse(raw);
        return {
            bestScore: Number(parsed.bestScore) || 0,
            gamesPlayed: Number(parsed.gamesPlayed) || 0,
        };
    } catch (error) {
        console.warn("Unable to load stats", error);
        return { ...DEFAULT_STATS };
    }
}

let stats = loadStats();
let answersLog = [];

function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function updateStatsDisplay() {
    if (!statsElement) {
        return;
    }
    statsElement.textContent = `Best Score: ${stats.bestScore}/${QUESTIONS_PER_GAME} | Games Played: ${stats.gamesPlayed}`;
}

updateStatsDisplay();

let currentIndex = 0;
let currentScore = 0;
let waitingForNext = false;
let readyToRestart = false;
let pageWasHidden = false;
let toastTimeoutId = null;

function unlockQuiz() {
    answerInput.disabled = false;
    form.querySelector("button").disabled = false;
}

function lockQuiz() {
    answerInput.disabled = true;
    form.querySelector("button").disabled = true;
}

function stopCelebration() {
    if (!celebration) {
        return;
    }
    celebration.classList.remove("show");
}

function playCelebration() {
    if (!celebration) {
        return;
    }
    celebration.classList.add("show");
}

function startNewGame() {
    questions = pickRandomQuestions(allQuestions, QUESTIONS_PER_GAME).map(shuffleOptions);
    currentIndex = 0;
    currentScore = 0;
    waitingForNext = false;
    readyToRestart = false;
    answersLog = [];
    stopCelebration();
    hideFarewellModal();
    hideReminderToast();
    if (summarySection) {
        summarySection.hidden = true;
    }
    if (summaryList) {
        summaryList.innerHTML = "";
    }
    if (summaryNote) {
        summaryNote.textContent = "";
    }
    unlockQuiz();
    updateActionButtons();
    renderQuestion();
}

function renderQuestion() {
    if (!questionText || !optionsList || !factBox || !progress) {
        return;
    }

    const current = questions[currentIndex];
    progress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionText.textContent = current.prompt;
    optionsList.innerHTML = "";
    current.options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        optionsList.appendChild(li);
    });
    factBox.textContent = "";
    feedback.textContent = "";
    feedback.classList.remove("correct", "incorrect");
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    answerInput.value = "";
    answerInput.focus();
    waitingForNext = false;
    readyToRestart = false;
    updateActionButtons();
    stopCelebration();
}

function recordAnswer(question, selectedIndex) {
    const chosen = selectedIndex >= 0 ? question.options[selectedIndex] : null;
    const questionNumber = answersLog.length + 1;
    answersLog.push({
        questionNumber,
        prompt: question.prompt,
        correct: question.options[question.correctIndex],
        chosen,
        isCorrect: selectedIndex === question.correctIndex,
    });
}

function setFeedbackState(isCorrect) {
    feedback.classList.remove("correct", "incorrect");
    if (isCorrect === true) {
        feedback.classList.add("correct");
    } else if (isCorrect === false) {
        feedback.classList.add("incorrect");
    }
}

function updateActionButtons() {
    if (!nextButton) {
        return;
    }
    const shouldShowNext = waitingForNext || readyToRestart;
    nextButton.hidden = !shouldShowNext;
    if (readyToRestart) {
        nextButton.textContent = "Play Again";
    } else if (questions.length && currentIndex === questions.length - 1) {
        nextButton.textContent = "Finish";
    } else {
        nextButton.textContent = "Next Question";
    }

    const shouldShowSecondary = shouldShowNext;
    if (finishedButton) {
        finishedButton.hidden = !shouldShowSecondary;
        finishedButton.textContent = readyToRestart ? "Finished" : "Finish Round";
    }
    if (exitButton) {
        exitButton.hidden = !shouldShowSecondary;
        exitButton.textContent = readyToRestart ? "Exit" : "Exit Early";
    }
}

function showFarewellModal(message) {
    if (!farewellModal || !farewellMessage || !closeModalButton) {
        return;
    }
    farewellMessage.textContent = message;
    farewellModal.hidden = false;
    farewellModal.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
        farewellModal.classList.add("show");
        closeModalButton.focus();
    });
}

function hideFarewellModal() {
    if (!farewellModal) {
        return;
    }
    farewellModal.classList.remove("show");
    farewellModal.setAttribute("aria-hidden", "true");
    setTimeout(() => {
        if (farewellModal.classList.contains("show")) {
            return;
        }
        farewellModal.hidden = true;
    }, 220);
}

function showReminderToast(message = "We missed you! Come play again, please.") {
    if (!reminderToast) {
        return;
    }
    reminderToast.textContent = message;
    reminderToast.hidden = false;
    requestAnimationFrame(() => reminderToast.classList.add("show"));
    if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
    }
    toastTimeoutId = setTimeout(() => {
        hideReminderToast();
    }, 5000);
}

function hideReminderToast() {
    if (!reminderToast) {
        return;
    }
    reminderToast.classList.remove("show");
    if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
        toastTimeoutId = null;
    }
    setTimeout(() => {
        if (!reminderToast.classList.contains("show")) {
            reminderToast.hidden = true;
        }
    }, 220);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (waitingForNext || readyToRestart) {
        return;
    }
    const current = questions[currentIndex];
    const value = Number(answerInput.value) - 1;

    if (Number.isNaN(value) || value < 0 || value >= current.options.length) {
        feedback.textContent = "Enter a valid option number.";
        setFeedbackState();
        stopCelebration();
        return;
    }

    recordAnswer(current, value);
    if (value === current.correctIndex) {
        feedback.textContent = "Correct!";
        currentScore += 1;
        setFeedbackState(true);
        playCelebration();
    } else {
        feedback.textContent = `Answer: ${current.options[current.correctIndex]}`;
        setFeedbackState(false);
        stopCelebration();
    }

    factBox.textContent = current.fact || "";
    score.textContent = `Score: ${currentScore} / ${questions.length}`;

    waitingForNext = true;
    updateActionButtons();
});

function showCompletionState() {
    feedback.textContent += " Quiz complete.";
    factBox.textContent = "";
    lockQuiz();
    waitingForNext = false;
    readyToRestart = true;
    updateActionButtons();
    finalizeRound();
    showFarewellModal("Thanks for practicing rabbit husbandry!");
}

function finalizeRound() {
    stats.gamesPlayed += 1;
    if (currentScore > stats.bestScore) {
        stats.bestScore = currentScore;
    }
    saveStats();
    updateStatsDisplay();
    renderSummary();
}

function renderSummary() {
    if (!summarySection || !summaryList || !summaryNote) {
        return;
    }

    const misses = answersLog.filter((entry) => !entry.isCorrect);
    summaryList.innerHTML = "";

    if (misses.length === 0) {
        summaryNote.textContent = "Perfect round! Every question was correct.";
    } else {
        summaryNote.textContent = "Review these topics and try again:";
        misses.forEach((miss) => {
            const item = document.createElement("li");
            item.innerHTML = `<strong>Q${miss.questionNumber}:</strong> ${miss.prompt}<br />Correct answer: ${miss.correct}`;
            if (miss.chosen && miss.chosen !== miss.correct) {
                item.innerHTML += `<br />You answered: ${miss.chosen}`;
            }
            summaryList.appendChild(item);
        });
    }

    summarySection.hidden = false;
    summarySection.focus();
}

nextButton.addEventListener("click", () => {
    if (readyToRestart) {
        startNewGame();
        return;
    }

    if (!waitingForNext) {
        return;
    }

    currentIndex += 1;
    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showCompletionState();
    }
});

if (finishedButton) {
    finishedButton.addEventListener("click", () => {
        if (readyToRestart) {
            showFarewellModal("We hope you had fun! Hop back in anytime.");
            return;
        }
        if (!waitingForNext) {
            return;
        }
        showCompletionState();
    });
}

if (exitButton) {
    exitButton.addEventListener("click", () => {
        if (!waitingForNext && !readyToRestart) {
            return;
        }
        lockQuiz();
        waitingForNext = false;
        readyToRestart = true;
        stopCelebration();
        feedback.textContent = "Taking a break? We will be ready when you are.";
        setFeedbackState();
        updateActionButtons();
        showFarewellModal("We already miss you! Come play again soon.");
    });
}

if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
        hideFarewellModal();
    });
}

if (farewellModal) {
    farewellModal.addEventListener("click", (event) => {
        if (event.target === farewellModal) {
            hideFarewellModal();
        }
    });
}

if (reminderToast) {
    reminderToast.addEventListener("click", () => {
        hideReminderToast();
    });
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        pageWasHidden = true;
        hideReminderToast();
        return;
    }
    if (pageWasHidden) {
        pageWasHidden = false;
        showReminderToast("We missed you! Come play again, please.");
    }
});

startNewGame();
*/

const TOPICS = ["Husbandry", "Health & Biosecurity", "Genetics", "ARBA Procedures", "Breeds & Judging"];
const DEFAULT_STATS = { bestScore: 0, gamesPlayed: 0, history: [], misses: [], topicResults: {} };
const STORAGE_KEY = "rabbitHusbandryStudyStats";

const scenarioQuestions = [
    {
        id: "scenario-returning-rabbit",
        topic: "Health & Biosecurity",
        source: "Practice scenario | Biosecurity guidance",
        prompt: "A rabbit returns from a show and begins sneezing two days later. What should happen before it rejoins the herd?",
        options: ["Return it to its usual cage and watch it", "Isolate it, use dedicated equipment, and contact a rabbit-savvy vet", "Give treats to improve its appetite"],
        correctIndex: 1,
        fact: "Returning rabbits should be quarantined, monitored, and handled with separate equipment to protect the herd.",
    },
    {
        id: "scenario-registration-tattoo",
        topic: "ARBA Procedures",
        source: "Practice scenario | ARBA procedures",
        prompt: "At a registration appointment, the rabbit's left-ear tattoo does not match its paperwork. What is the correct next step?",
        options: ["Ask the registrar to use the paperwork anyway", "Pause the registration and resolve the identification discrepancy", "Tattoo a new number over the existing tattoo at the table"],
        correctIndex: 1,
        fact: "Permanent identification and paperwork must agree. Resolve discrepancies before proceeding with registration.",
    },
    {
        id: "scenario-heat-stress",
        topic: "Husbandry",
        source: "Practice scenario | General husbandry guidance",
        prompt: "The rabbitry is 88°F (31°C), and a rabbit is breathing rapidly with warm ears. What is the best immediate action?",
        options: ["Move it to a cooler space, provide airflow, and use tepid water on the ears", "Submerge it in ice water", "Wait until evening to see whether it improves"],
        correctIndex: 0,
        fact: "Act promptly and cool gradually. Seek veterinary guidance if signs are severe or do not improve.",
    },
];

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
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen|body type|moon eye|full-arch|fur type|dutch rabbit/.test(text)) {
        return "registrar";
    }
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|palpate|homozygous|heterozygous|genotype|allele|vienna|charlie/.test(text)) {
        return "senior";
    }
    if (/gene|agouti|chinchilla|rufus|harlequin|brindling|kindling|gestation|breeding record/.test(text)) {
        return "intermediate";
    }
    if (/daily diet|fresh water|lift a show rabbit|daily observation|wire floors|trim nails/.test(text)) {
        return "cloverbud";
    }
    return "junior";
}

const questionBank = [...allQuestions, ...scenarioQuestions].map((question, index) => ({
    ...question,
    id: question.id || `question-${index + 1}`,
    topic: question.topic || inferTopic(question),
    studyTrack: question.studyTrack || inferStudyTrack(question),
    source: question.source || (inferTopic(question) === "ARBA Procedures" ? "Practice question | ARBA procedures" : "Practice question | General husbandry guidance"),
    reviewStatus: question.reviewStatus || "Practice content - verify current guidance",
}));

const questionText = document.getElementById("question");
const questionMeta = document.getElementById("question-meta");
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
const finishedButton = document.getElementById("finished");
const exitButton = document.getElementById("exit");
const statsElement = document.getElementById("stats");
const summarySection = document.getElementById("summary");
const summaryNote = document.getElementById("summary-note");
const summaryList = document.getElementById("summary-list");
const readiness = document.getElementById("readiness");
const historySection = document.getElementById("study-history");
const historySummary = document.getElementById("history-summary");
const studyMode = document.getElementById("study-mode");
const roundSize = document.getElementById("round-size");
const studyTrack = document.getElementById("study-track");
const startRoundButton = document.getElementById("start-round");
const topicFilters = document.getElementById("topic-filters");
const printReportButton = document.getElementById("print-report");
const confidenceFieldset = document.getElementById("confidence");
const confidenceHelpButton = document.getElementById("confidence-help");
const confidenceModal = document.getElementById("confidence-modal");
const closeConfidenceModalButton = document.getElementById("close-confidence-modal");

function loadStats() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return { ...DEFAULT_STATS, ...stored, history: Array.isArray(stored.history) ? stored.history : [], misses: Array.isArray(stored.misses) ? stored.misses : [], topicResults: stored.topicResults || {} };
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

function saveStats() { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }
function selectedTopics() { return [...topicFilters.querySelectorAll("input:checked")].map((input) => input.value); }
function currentMode() { return studyMode.value; }
function currentStudyTrack() { return studyTrack.value; }

function topicKey(topic) {
    return topic.toLowerCase().replace(/[ &]+/g, "-");
}

function stopCelebration() {
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
}

function pickRandomQuestions(pool, count) {
    const copy = [...pool];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy.slice(0, Math.min(count, copy.length));
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
    historySection.hidden = false;
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
    progress.textContent = `Question ${currentIndex + 1} of ${questions.length} | ${currentMode() === "exam" ? "Exam mode" : currentMode() === "review" ? "Review mode" : "Learn mode"}`;
    questionMeta.textContent = `${question.topic} | ${question.source} | ${question.reviewStatus}`;
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
    const incorrectChoice = question.options[selectedIndex];
    const correction = isCorrect
        ? "Review the note below to reinforce the rule."
        : `“${incorrectChoice}” does not match the key clue in this question. The best answer is “${question.options[question.correctIndex]}.”`;
    factBox.textContent = `${correction} ${question.fact || ""}`;
}

function submitAnswer(selectedIndex) {
    if (waitingForNext || roundComplete) return;
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
    feedback.textContent = isCorrect ? "Correct." : `Correct answer: ${question.options[question.correctIndex]}`;
    feedback.className = isCorrect ? "correct" : "incorrect";
    addExplanation(question, selectedIndex, isCorrect);
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    waitingForNext = true;
    setAnswerLocked(true);
    updateActionButtons();
}

function updateActionButtons() {
    nextButton.hidden = !waitingForNext && !roundComplete;
    finishedButton.hidden = !waitingForNext && !roundComplete;
    exitButton.hidden = !waitingForNext && !roundComplete;
    nextButton.textContent = roundComplete ? "Start New Round" : currentIndex === questions.length - 1 ? "Finish Round" : "Next Question";
    finishedButton.textContent = "Finish Round";
    exitButton.textContent = "Exit";
}

function renderSummary() {
    const misses = answersLog.filter((entry) => !entry.isCorrect);
    summaryList.replaceChildren();
    summaryNote.textContent = misses.length ? "Review these questions before your next round:" : "Perfect round. Every answer was correct.";
    answersLog.filter((entry) => !entry.isCorrect).forEach((entry) => {
        const item = document.createElement("li");
        const certaintyNote = entry.confidence === "certain" ? " You marked this answer as certain, so it is a good one to revisit." : "";
        item.textContent = `${entry.topic}: ${entry.prompt} Correct answer: ${entry.options[entry.correctIndex]}.${certaintyNote} ${entry.fact || ""}`;
        summaryList.appendChild(item);
    });
    const totalAnswered = Object.values(stats.topicResults).reduce((total, result) => total + result.total, 0);
    const totalCorrect = Object.values(stats.topicResults).reduce((total, result) => total + result.correct, 0);
    readiness.textContent = totalAnswered ? `Overall readiness: ${Math.round((totalCorrect / totalAnswered) * 100)}%. Focus next on ${misses.length ? [...new Set(misses.map((entry) => entry.topic))].join(", ") : "keeping every topic sharp"}.` : "";
    summarySection.hidden = false;
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
    const topics = selectedTopics();
    const eligible = questionBank.filter((question) =>
        topics.includes(question.topic)
        && (currentStudyTrack() === "mixed" || question.studyTrack === currentStudyTrack())
    );
    const reviewEligible = eligible.filter((question) => stats.misses.includes(question.id));
    const pool = currentMode() === "review" ? reviewEligible : eligible;
    if (!pool.length) {
        feedback.textContent = currentMode() === "review" ? "No missed questions match these filters yet. Try Learn or Exam mode." : "No questions match those filters. Try a different study path or topic.";
        return;
    }
    questions = pickRandomQuestions(pool, Number(roundSize.value)).map(shuffleOptions);
    currentIndex = 0;
    currentScore = 0;
    answersLog = [];
    roundComplete = false;
    summarySection.hidden = true;
    renderQuestion();
}

nextButton.addEventListener("click", () => {
    if (roundComplete) return startNewGame();
    if (!waitingForNext) return;
    if (currentIndex === questions.length - 1) return completeRound();
    currentIndex += 1;
    renderQuestion();
});
finishedButton.addEventListener("click", completeRound);
exitButton.addEventListener("click", completeRound);
startRoundButton.addEventListener("click", startNewGame);
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
document.addEventListener("keydown", (event) => {
    if (waitingForNext || roundComplete || event.ctrlKey || event.metaKey || event.altKey) return;
    if (!["1", "2", "3"].includes(event.key)) return;
    const activeElement = document.activeElement;
    if (activeElement?.matches("select, input, textarea")) return;
    submitAnswer(Number(event.key) - 1);
});

updateStatsDisplay();
startNewGame();
