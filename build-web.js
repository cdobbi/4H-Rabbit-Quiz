const { cpSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const webDirectory = join(__dirname, "www");
const fontDirectory = join(webDirectory, "fonts");
const localFontDirectory = join(__dirname, "fonts");
const fontSourceDirectory = join(__dirname, "node_modules", "@fontsource", "fredoka", "files");

rmSync(webDirectory, { recursive: true, force: true });
mkdirSync(fontDirectory, { recursive: true });
mkdirSync(localFontDirectory, { recursive: true });

for (const fileName of ["index.html", "app.js", "study.css"]) {
    cpSync(join(__dirname, fileName), join(webDirectory, fileName));
}

for (const weight of [400, 500, 600, 700]) {
    const fileName = `fredoka-latin-${weight}-normal.woff2`;
    cpSync(join(fontSourceDirectory, fileName), join(fontDirectory, fileName));
    cpSync(join(fontSourceDirectory, fileName), join(localFontDirectory, fileName));
}

console.log("Offline web bundle created in www.");