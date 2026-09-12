const fs = require("node:fs");
const vm = require("node:vm");

const TOPICS = ["Husbandry", "Health & Biosecurity", "Genetics", "ARBA Procedures", "Breeds & Judging"];
const STUDY_TRACKS = ["cloverbud", "junior", "intermediate", "senior", "registrar"];
const source = fs.readFileSync("questions.js", "utf8");
const sandbox = {};

vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: "questions.js" });

const { allQuestions, scenarioQuestions } = sandbox.RABBIT_SAVVY_QUESTION_DATA || {};
const sourceQuestions = [...allQuestions, ...scenarioQuestions];
const problems = [];

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
    if (/arba|registration|tattoo|pedigree|meat-pen|meat pen/.test(text)) return "registrar";
    if (/pasteurella|snuffles|rhdv|contagious|quarantine|palpate|homozygous|heterozygous|genotype|allele|vienna|charlie/.test(text)) return "senior";
    if (/gene|agouti|chinchilla|rufus|harlequin|brindling|kindling|gestation|breeding record|body type|moon eye|full-arch|fur type|dutch rabbit/.test(text)) return "intermediate";
    if (/daily diet|fresh water|lift a show rabbit|daily observation|wire floors|trim nails/.test(text)) return "cloverbud";
    return "junior";
}

const prompts = new Set();
sourceQuestions.forEach((question, index) => {
    if (!question || typeof question !== "object") {
        problems.push(`Question ${index + 1} is not an object.`);
        return;
    }
    if (!question.prompt || prompts.has(question.prompt)) problems.push(`Duplicate or missing prompt at question ${index + 1}.`);
    prompts.add(question.prompt);
    if (!Array.isArray(question.options) || question.options.length < 2) problems.push(`Question ${index + 1} has invalid options.`);
    if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) problems.push(`Question ${index + 1} has an invalid correct answer.`);
    if (question.topic && !TOPICS.includes(question.topic)) problems.push(`Question ${index + 1} has an invalid topic.`);
    if (question.studyTrack && !STUDY_TRACKS.includes(question.studyTrack)) problems.push(`Question ${index + 1} has an invalid study track.`);
});

const markers = [...source.matchAll(/^\s*\/\/\s*Question\s+(\d+)\s*$/gm)].map((match) => Number(match[1]));
if (markers.length !== sourceQuestions.length || !markers.every((number, index) => number === index + 1)) {
    problems.push("Question markers must be sequential and match the question count.");
}

const questionBank = sourceQuestions.map((question, index) => ({
    ...question,
    id: question.id || `question-${index + 1}`,
    topic: question.topic || inferTopic(question),
    studyTrack: question.studyTrack || inferStudyTrack(question),
}));
const freeQuestions = TOPICS.flatMap((topic) => questionBank
    .filter((question) => question.topic === topic && question.studyTrack !== "registrar")
    .slice(0, 10));

TOPICS.forEach((topic) => {
    const count = freeQuestions.filter((question) => question.topic === topic).length;
    if (count !== 10) problems.push(`Free tier has ${count} ${topic} questions; expected 10.`);
});

if (problems.length) {
    console.error(`Question-bank validation failed:\n${problems.join("\n")}`);
    process.exitCode = 1;
} else {
    console.log(`Question-bank validation passed: ${questionBank.length} questions, ${freeQuestions.length} free questions.`);
}