import { RabbitQuestion } from "./index";

describe("RabbitQuestion", () => {
    it("confirms the correct answer", () => {
        const question = new RabbitQuestion(
            "Which mat helps protect hocks?",
            ["None", "Plastic resting mat", "Wet towel"],
            1,
        );

        expect(question.isCorrect(1)).toBe(true);
    });

    it("flags incorrect answers", () => {
        const question = new RabbitQuestion(
            "How many chromosomes do rabbits have?",
            ["22", "44", "64"],
            2,
        );

        expect(question.isCorrect(0)).toBe(false);
    });
});
