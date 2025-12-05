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
    if (finishedButton) {
        finishedButton.hidden = true;
    }
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
    nextButton.hidden = true;
    if (finishedButton) {
        finishedButton.hidden = true;
    }
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
    nextButton.hidden = false;
    nextButton.textContent = currentIndex === questions.length - 1 ? "Finish" : "Next Question";
});

function showCompletionState() {
    feedback.textContent += " Quiz complete.";
    factBox.textContent = "Thanks for practicing rabbit husbandry!";
    lockQuiz();
    waitingForNext = false;
    readyToRestart = true;
    nextButton.hidden = false;
    nextButton.textContent = "Play Again";
    if (finishedButton) {
        finishedButton.hidden = false;
        finishedButton.textContent = "Finished";
    }
    finalizeRound();
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
        if (!readyToRestart) {
            return;
        }
        stopCelebration();
        feedback.textContent = "Great job today! Feel free to review your recap or close the quiz.";
        setFeedbackState();
        finishedButton.hidden = true;
    });
}

startNewGame();
