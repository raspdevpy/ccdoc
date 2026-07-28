const fs = require("fs");
const path = require("path");

const GUIDE_DIR = path.join(__dirname, "../../");

const functionMap = new Map();

function scan(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            scan(full);
        } else if (entry.name.endsWith(".md")) {
            const name = path.basename(entry.name, ".md").toLowerCase();
            functionMap.set(name, full);
        }
    }
}

scan(GUIDE_DIR);

module.exports = (page, content) => {
    const currentFile = page[0].filePath;

    return content.replace(/`\$([A-Za-z]+)`/g, (match, fn) => {
        const targetFile = functionMap.get(fn.toLowerCase()+"_ai")??functionMap.get(fn.toLowerCase());
        if (!targetFile) return match;

        let relative = path.relative(
            path.dirname(currentFile),
            targetFile
        );

        relative = relative.replace(/\\/g, "/");

        return `[\`${match}\`](${relative})`;
    });
};