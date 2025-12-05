# Overview
I built a small command-line rabbit husbandry quiz to sharpen my TypeScript skills while practicing object-oriented patterns, recursion, and async workflows. The program guides a 4-H exhibitor through breeder-focused questions and shares quick husbandry tips after every answer.

My goal was to deepen my understanding of TypeScript syntax (classes, generics-ready structures, async/await) and how to pair it with Node.js console utilities to craft useful training tools for youth breeders.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment
- Visual Studio Code with the official TypeScript extension for editing and IntelliSense.
- Node.js 20.x runtime plus npm scripts for building and running.
- TypeScript compiler (`tsc`) with `ts-node` for quick execution, and Jest/ts-jest for testing hooks.

The language is TypeScript, and the key libraries are `readline/promises` from Node for asynchronous input along with `ts-node` and `jest` tooling packages.

# Useful Websites
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js Readline API](https://nodejs.org/api/readline.html)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

# Future Work
- Add unit tests that cover the scoring logic and error handling paths.
- Persist quiz results to a JSON or CSV log for tracking improvement.
- Expand the genetics section with pedigree-based follow-up questions.
