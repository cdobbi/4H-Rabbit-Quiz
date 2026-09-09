const { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const webDirectory = join(__dirname, "www");
const fontDirectory = join(webDirectory, "fonts");
const localFontDirectory = join(__dirname, "fonts");
const fontSourceDirectory = join(__dirname, "node_modules", "@fontsource", "fredoka", "files");
const assetDirectory = join(__dirname, "assets");
const isBetaBuild = process.argv.includes("--beta");

const wallpaperFiles = readdirSync(assetDirectory)
    .filter((fileName) => /\.(avif|jpe?g|png|webp)$/i.test(fileName) && fileName !== "notification-icon.png")
    .sort();
writeFileSync(join(__dirname, "wallpapers.js"), `globalThis.RABBIT_WALLPAPERS = ${JSON.stringify(wallpaperFiles.map((fileName) => `assets/${fileName}`))};\n`);

rmSync(webDirectory, { recursive: true, force: true });
mkdirSync(fontDirectory, { recursive: true });
mkdirSync(localFontDirectory, { recursive: true });

for (const fileName of ["index.html", "app.js", "study.css", "wallpapers.js"]) {
    cpSync(join(__dirname, fileName), join(webDirectory, fileName));
}

writeFileSync(join(webDirectory, "app-config.js"), `globalThis.RABBIT_QUIZ_BETA = ${isBetaBuild};\n`);
const bundledIndex = join(webDirectory, "index.html");
const indexContent = require("node:fs").readFileSync(bundledIndex, "utf8");
writeFileSync(bundledIndex, indexContent.replace('<script src="app.js" defer></script>', '<script src="app-config.js"></script>\n    <script src="app.js" defer></script>'));

for (const fileName of wallpaperFiles) {
    cpSync(join(__dirname, "assets", fileName), join(webDirectory, "assets", fileName));
}

for (const weight of [400, 500, 600, 700]) {
    const fileName = `fredoka-latin-${weight}-normal.woff2`;
    cpSync(join(fontSourceDirectory, fileName), join(fontDirectory, fileName));
    cpSync(join(fontSourceDirectory, fileName), join(localFontDirectory, fileName));
}

console.log(`Offline ${isBetaBuild ? "beta " : ""}web bundle created in www.`);