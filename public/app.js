const questions = [
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
];

const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const factBox = document.getElementById("fact");
const progress = document.getElementById("progress");
const form = document.getElementById("answer-form");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");

let currentIndex = 0;
let currentScore = 0;

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
    score.textContent = `Score: ${currentScore} / ${questions.length}`;
    answerInput.value = "";
    answerInput.focus();
}

function lockQuiz() {
    answerInput.disabled = true;
    form.querySelector("button").disabled = true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const current = questions[currentIndex];
    const value = Number(answerInput.value) - 1;

    if (Number.isNaN(value) || value < 0 || value >= current.options.length) {
        feedback.textContent = "Enter a valid option number.";
        return;
    }

    if (value === current.correctIndex) {
        feedback.textContent = "Correct!";
        currentScore += 1;
    } else {
        feedback.textContent = `Answer: ${current.options[current.correctIndex]}`;
    }

    factBox.textContent = current.fact || "";
    score.textContent = `Score: ${currentScore} / ${questions.length}`;

    currentIndex += 1;
    if (currentIndex < questions.length) {
        setTimeout(renderQuestion, 3000);
    } else {
        feedback.textContent += " Quiz complete.";
        lockQuiz();
    }
});

renderQuestion();
