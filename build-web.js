const { cpSync, mkdirSync, rmSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const webDirectory = join(__dirname, "www");
const fontDirectory = join(webDirectory, "fonts");
const localFontDirectory = join(__dirname, "fonts");
const fontSourceDirectory = join(__dirname, "node_modules", "@fontsource", "fredoka", "files");
const isBetaBuild = process.argv.includes("--beta");

rmSync(webDirectory, { recursive: true, force: true });
mkdirSync(fontDirectory, { recursive: true });
mkdirSync(localFontDirectory, { recursive: true });

for (const fileName of ["index.html", "app.js", "study.css"]) {
    cpSync(join(__dirname, fileName), join(webDirectory, fileName));
}

writeFileSync(join(webDirectory, "app-config.js"), `globalThis.RABBIT_QUIZ_BETA = ${isBetaBuild};\n`);
const bundledIndex = join(webDirectory, "index.html");
const indexContent = require("node:fs").readFileSync(bundledIndex, "utf8");
writeFileSync(bundledIndex, indexContent.replace('<script src="app.js" defer></script>', '<script src="app-config.js"></script>\n    <script src="app.js" defer></script>'));

cpSync(join(__dirname, "assets", "rabbit-wallpaper.png"), join(webDirectory, "assets", "rabbit-wallpaper.png"));
cpSync(join(__dirname, "assets", "rabbitking.avif"), join(webDirectory, "assets", "rabbitking.avif"));
cpSync(join(__dirname, "assets", "rabbit-meadow.png"), join(webDirectory, "assets", "rabbit-meadow.png"));

for (const weight of [400, 500, 600, 700]) {
    const fileName = `fredoka-latin-${weight}-normal.woff2`;
    cpSync(join(fontSourceDirectory, fileName), join(fontDirectory, fileName));
    cpSync(join(fontSourceDirectory, fileName), join(localFontDirectory, fileName));
}

console.log(`Offline ${isBetaBuild ? "beta " : ""}web bundle created in www.`);