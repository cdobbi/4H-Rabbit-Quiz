import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

export class RabbitQuestion {
    constructor(
        public prompt: string,
        public options: string[],
        public correctIndex: number,
        public funFact?: string
    ) { }

    isCorrect(answerIndex: number): boolean {
        return answerIndex === this.correctIndex;
    }
}

// This handles recursion (askQuestion calls itself), async input, and exception handling via parseAnswer.
export class RabbitQuiz {
    private score = 0;
    private reader = readline.createInterface({ input, output });

    constructor(private questions: RabbitQuestion[]) { }

    async start(): Promise<void> {
        console.log("🐇 Welcome to the Rabbit Husbandry Quiz!");
        await this.askQuestion(0);
        console.log(`Quiz complete! You scored ${this.score} out of ${this.questions.length}.`);
        this.reader.close();
    }

    private async askQuestion(index: number): Promise<void> {
        if (index >= this.questions.length) {
            return;
        }

        const question = this.questions[index];
        console.log(`\nQ${index + 1}: ${question.prompt}`);
        question.options.forEach((option, i) => console.log(`  ${i + 1}. ${option}`));

        try {
            const rawAnswer = await this.reader.question("Your answer (1, 2, 3...): ");
            const answerIndex = this.parseAnswer(rawAnswer, question.options.length);

            if (question.isCorrect(answerIndex)) {
                console.log("✅ Correct!");
                this.score += 1;
            } else {
                console.log(`❌ Not quite. The correct answer was "${question.options[question.correctIndex]}".`);
            }

            if (question.funFact) {
                console.log(`Fun fact: ${question.funFact}`);
            }

            await this.askQuestion(index + 1);
        } catch (error) {
            console.log("Please enter a valid option number.");
            await this.askQuestion(index);
        }
    }

    private parseAnswer(raw: string, optionCount: number): number {
        const parsed = Number(raw.trim()) - 1;

        if (Number.isNaN(parsed) || parsed < 0 || parsed >= optionCount) {
            throw new Error("Invalid answer");
        }

        return parsed;
    }
}

const QUESTIONS_PER_GAME = 10;

function pickRandomQuestions<T>(pool: T[], count: number): T[] {
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(count, copy.length));
}

function shuffleOptions(question: RabbitQuestion): RabbitQuestion {
    const optionEntries = question.options.map((text, index) => ({ text, index }));
    for (let i = optionEntries.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionEntries[i], optionEntries[j]] = [optionEntries[j], optionEntries[i]];
    }
    const shuffledOptions = optionEntries.map((entry) => entry.text);
    const newCorrectIndex = optionEntries.findIndex((entry) => entry.index === question.correctIndex);
    return new RabbitQuestion(
        question.prompt,
        shuffledOptions,
        newCorrectIndex,
        question.funFact
    );
}

async function askToReplay(): Promise<boolean> {
    const replayReader = readline.createInterface({ input, output });
    while (true) {
        const answer = (await replayReader.question("Play another round? (y/n): ")).trim().toLowerCase();
        if (answer === "y" || answer === "yes") {
            replayReader.close();
            return true;
        }
        if (answer === "n" || answer === "no") {
            replayReader.close();
            return false;
        }
        console.log("Please enter y or n.");
    }
}

async function runQuizLoop(): Promise<void> {
    let playAgain = true;
    while (playAgain) {
        const selectedQuestions = pickRandomQuestions(allQuestions, QUESTIONS_PER_GAME).map(shuffleOptions);
        const quiz = new RabbitQuiz(selectedQuestions);
        await quiz.start();
        playAgain = await askToReplay();
    }
    console.log("Thanks for training with the rabbit quiz!");
}

// Building the rabbit-care questions and starting the quiz.
const allQuestions: RabbitQuestion[] = [
    new RabbitQuestion(
        "What should be the foundation of a meat or show rabbit's daily diet?",
        ["High-sugar treats", "Unlimited grass hay with balanced pellets", "Only fresh garden greens"],
        1,
        "Hay plus measured pellets keeps teeth worn and growth steady for meat and show stock."
    ),
    new RabbitQuestion(
        "How often should working breeders plan to trim nails on their herd?",
        ["Whenever a show judge mentions it", "About every 4–6 weeks", "Only before kindling"],
        1,
        "Routine trims prevent broken toes in wire cages and keep poses square on the table."
    ),
    new RabbitQuestion(
        "What housing detail keeps rabbits comfortable on wire floors?",
        ["Skip wire so they never clean cages", "Provide resting mats or tiles on the wire", "Use solid wood floors that stay damp"],
        1,
        "Wire keeps waste away, but resting boards let rabbits get off the mesh to protect hocks."
    ),
    new RabbitQuestion(
        "When should you place a nest box for a pregnant doe?",
        ["The day breeding happens", "About 3–4 days before the due date", "After you see kits born"],
        1,
        "A box lined with hay right before kindling keeps kits warm and prevents scattered litters."
    ),
    new RabbitQuestion(
        "Both parents are black but carry the recessive chinchilla gene (Cc). What percent of kits do you expect to be chinchilla (cc)?",
        ["25%", "50%", "75%"],
        0,
        "A simple Punnett square for two carriers predicts one out of four kits showing the recessive color."
    ),
    new RabbitQuestion(
        "How does a kit receive its coat-color genes?",
        ["Both copies come from the buck", "One allele comes from each parent", "Whichever grandparent had the darkest coat"],
        1,
        "Every kit inherits two alleles per locus—one from the sire, one from the dam—so pedigrees pair up genes."
    ),
    new RabbitQuestion(
        "If a heterozygous agouti (Aa) is bred to a self-colored recessive (aa), what percent of kits show the dominant agouti pattern?",
        ["0%", "25%", "50%"],
        2,
        "Half the kits receive the dominant A from the heterozygous parent, so about 50% present agouti."
    ),
    new RabbitQuestion(
        "What is the safest way to lift a show rabbit onto the table?",
        ["Grab ears only", "Support chest while cradling hindquarters", "Scoop from the belly and swing"],
        1,
        "Always support the back end to avoid powerful kicks that can injure the spine."
    ),
    new RabbitQuestion(
        "Which daily observation tells you the herd is thriving?",
        ["Even feed intake and manure output", "How loudly they thump", "How much they chew cage bars"],
        0,
        "Consistent appetite and droppings reveal gut health long before a rabbit shows sickness."
    ),
    new RabbitQuestion(
        "On a 1–5 body condition scale, what score do breeders target for a show-ready rabbit?",
        ["2 (too lean)", "3 (ideal)", "5 (overweight)",],
        1,
        "A score of 3 means the loin feels smooth with a slight layer of flesh—perfect for posing on the table."
    ),
    new RabbitQuestion(
        "What is the single most critical nutrient to keep available at all times?",
        ["Pellets", "Fresh water", "Salt wheels"],
        1,
        "Rabbits can skip a meal briefly, but lack of water stops digestion and milk production almost immediately."
    ),
    new RabbitQuestion(
        "At how many days post-breeding can you gently palpate to confirm pregnancy?",
        ["5–7 days", "10–14 days", "25–30 days"],
        1,
        "Around day 12 the embryos feel like grapes or walnuts, giving breeders an early read on conception."
    ),
    new RabbitQuestion(
        "When should medium-breed kits typically be weaned?",
        ["3 weeks", "6–7 weeks", "10 weeks"],
        1,
        "Weaning at six weeks lets kits eat pellets well while still benefiting from the doe's immunity."
    ),
    new RabbitQuestion(
        "Which ventilation practice best limits ammonia buildup in a rabbitry?",
        ["Keep every window shut", "Use fans to pull in fresh air and exhaust stale air", "Spray cages with water daily"],
        1,
        "Constant airflow whisks away moisture and ammonia so respiratory systems stay clear."
    ),
    new RabbitQuestion(
        "How many generations must appear on a pedigree for ARBA registration?",
        ["Two", "Three", "Five"],
        1,
        "Registration requires a three-generation pedigree showing parents, grandparents, and great-grandparents."
    ),
    new RabbitQuestion(
        "Why does ARBA require a permanent tattoo in the rabbit's left ear?",
        ["It is decorative", "It is the official identification that matches show paperwork", "It shows the rabbit's variety"],
        1,
        "The tattoo number ties the rabbit to its entry card and pedigree during shows and registrations."
    ),
    new RabbitQuestion(
        "A homozygous agouti buck (AA) bred to a self-colored doe (aa) will produce kits with which genotype?",
        ["All Aa, showing agouti", "All aa, showing self", "Half Aa and half aa"],
        0,
        "Agouti (A) is dominant, so every kit from AA × aa turns out agouti while carrying the recessive self gene."
    ),
    new RabbitQuestion(
        "What phenotype results from pairing two homozygous recessive self rabbits (aa × aa)?",
        ["All kits agouti", "All kits self-colored", "Half agouti and half self"],
        1,
        "With only recessive alleles available, every kit receives aa and expresses the self color."
    ),
    new RabbitQuestion(
        "What is a common early sign of rabbit pasteurella (snuffles)?",
        ["Bright clear eyes", "Sneezing with white nasal discharge", "Blue tongue"],
        1,
        "Pasteurella often shows up as frequent sneezing and a thick white mucus on the forepaws from wiping the nose."
    ),
    new RabbitQuestion(
        "How can breeders reduce the risk of RHDV2 entering their rabbitry?",
        ["Share water crocks between barns", "Quarantine new or returning rabbits for 30+ days", "Allow visitors to handle rabbits freely"],
        1,
        "A strict quarantine plus dedicated equipment helps keep rabbit hemorrhagic disease outside your herd."
    ),
    new RabbitQuestion(
        "What is the recommended response when you suspect a contagious disease in your herd?",
        ["Sell the rabbits quickly", "Isolate symptomatic rabbits and call a rabbit-savvy vet", "Ignore it until show season"],
        1,
        "Immediate isolation, sanitation, and professional guidance slow outbreaks and protect the rest of the colony."
    ),
    new RabbitQuestion(
        "Which fur type features short guard hairs about half the length of normal coats, creating a plush texture?",
        ["Satin", "Rex", "Wool"],
        1,
        "Rex fur stands upright with very short guard hairs, so it feels like velvet when you brush it backward."
    ),
    new RabbitQuestion(
        "What ARBA body type describes meat breeds like the New Zealand or Californian?",
        ["Semi-arch", "Commercial", "Compact"],
        1,
        "Commercial body types are deep and rounded for efficient muscling and ideal meat production."
    ),
    new RabbitQuestion(
        "Flemish Giants are placed in which body type category?",
        ["Semi-arch", "Full-arch", "Compact"],
        0,
        "Semi-arch breeds show a smooth rise starting behind the shoulders and peaking over the hips."
    ),
    new RabbitQuestion(
        "Which ARBA grouping highlights primarily pet or fancy breeds such as Dutch or Holland Lops?",
        ["Commercial", "Fancy", "Meat pen"],
        1,
        "Fancy breeds are exhibited for color, markings, and uniqueness rather than production traits."
    ),
    new RabbitQuestion(
        "What does the term 'moon eye' describe in rabbit judging?",
        ["A desirable blue sheen", "A milky white spot or film on the eye", "A copper-colored iris"],
        1,
        "Moon eye is a fault/possible disqualification caused by scarring, creating a white opaque area on the cornea."
    ),
    new RabbitQuestion(
        "Which gene is required to produce blue-eyed white (BEW) rabbits?",
        ["Vienna gene", "Agouti gene", "Steel gene"],
        0,
        "BEW color results from the Vienna (V) gene, while red-eyed white (REW) comes from the recessive c series."
    ),
    new RabbitQuestion(
        "Which of the following is recognized as a giant breed by ARBA?",
        ["Netherland Dwarf", "Flemish Giant", "Dutch"],
        1,
        "Flemish Giants regularly exceed 14 pounds and represent the giant category on show tables."
    ),
    new RabbitQuestion(
        "Which breed consistently ranks among the most popular show entries in the U.S.?",
        ["Holland Lop", "Silver Marten", "Belgian Hare"],
        0,
        "Holland Lops top ARBA registration numbers year after year thanks to their size and personality."
    ),
    new RabbitQuestion(
        "How should you properly pose a full-arch breed like a Tan or Checkered Giant?",
        ["Press the belly to the table", "Let it stand up on its own showing daylight under the body", "Stretch it flat like a rug"],
        1,
        "Full-arch breeds are posed on their feet with minimal handling so judges can see the arch from shoulders to hips."
    ),
    new RabbitQuestion(
        "What is a 'charlie' in broken rabbits?",
        ["A rabbit with no markings", "A broken pattern with less than 10% color", "Any rabbit with blue eyes"],
        1,
        "Charlies miss most of their spots because the En gene doubled up, so they usually have only ear and nose color."
    ),
    new RabbitQuestion(
        "Which description best matches the broken pattern?",
        ["Solid coat with ticking", "White base with patches of color and a butterfly nose marking", "Only agouti banding"],
        1,
        "Broken patterned rabbits show white fur plus distinct patches of color, ideally with a butterfly mark on the nose."
    ),
    new RabbitQuestion(
        "How should a Harlequin rabbit's color be arranged?",
        ["Random splashes everywhere", "Alternating bars or blocks of two colors on the face, body, and feet", "Solid body with colored ears"],
        1,
        "True Harlequins display alternating orange and black (or blue, chocolate, lilac) sections like a checkerboard."
    ),
    new RabbitQuestion(
        "What does 'brindling' mean when judging coat color?",
        ["Evenly mixed guard hairs and undercolor", "Random streaks of two colors mixed together", "A solid self color"],
        1,
        "Brindling is when two colors intermix in streaks, common in some Harlequins and treated as either a fault or allowance per breed."
    ),
    new RabbitQuestion(
        "Which marking error will fault a Dutch rabbit?",
        ["Straight saddle", "Uneven stop markings on the back feet", "Clean blaze"],
        1,
        "Dutch markings must be crisp; uneven white stops on the hind feet lower the score."
    ),
    new RabbitQuestion(
        "What happens when a rabbit carries only one copy of the Vienna gene (Vv)?",
        ["It becomes albino", "It shows Vienna marks like white paws or nose", "It turns rex coated"],
        1,
        "Single Vienna carriers often have cute white mittens or snips even though they are not full blue-eyed whites."
    ),
    new RabbitQuestion(
        "What does the rufus modifier add to a rabbit's coat?",
        ["Extra blue shading", "Warm red/orange richness", "White ticking"],
        1,
        "Rufus intensifies the orange/red tones, giving breeds like New Zealands their rich rust color."
    )
];

// instantiate and start the quiz unless tests are running
if (process.env.NODE_ENV !== "test") {
    runQuizLoop().catch((err) => {
        console.error("Unexpected error running the quiz:", err);
    });
}

// Explanation:
// prompt is the question text.
// options lists the possible answers.
// correctIndex is the index (0-based) of the right answer.
// funFact is optional and lets us share rabbit trivia after each question.
// isCorrect checks whether the user’s answer matches the correct index.