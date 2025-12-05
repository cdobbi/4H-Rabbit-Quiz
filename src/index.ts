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
        console.log("🐇 Welcome to the Rabbit Care Quiz!");
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

// Building the rabbit-care questions and starting the quiz.
const questions: RabbitQuestion[] = [
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
    )
];

// instantiate and start the quiz unless tests are running
if (process.env.NODE_ENV !== "test") {
    const quiz = new RabbitQuiz(questions);

    quiz.start().catch((err) => {
        console.error("Unexpected error starting the quiz:", err);
    });
}

// Explanation:
// prompt is the question text.
// options lists the possible answers.
// correctIndex is the index (0-based) of the right answer.
// funFact is optional and lets us share rabbit trivia after each question.
// isCorrect checks whether the user’s answer matches the correct index.