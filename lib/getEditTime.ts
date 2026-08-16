import path from "path";
import { execSync } from "child_process";

export function getEditTime(relative: string) {
    const fullPath = path.resolve(process.cwd(), "content/docs", relative);
    const timestamp = execSync(`git log -1 --format=%cI "${fullPath}"`)
        .toString()
        .trim();
    return new Date(timestamp);
}
