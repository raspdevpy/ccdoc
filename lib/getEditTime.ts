import path from "path";
import { execSync } from "child_process";

export function getEditTime(relative: string) {
    // not used since the builder has no access to git
    return new Date();
    const fullPath = path.resolve(process.cwd(), "content/docs", relative);
    const timestamp = execSync(`git log -1 --format=%cI "${fullPath}"`)
        .toString()
        .trim();
    return new Date(timestamp);
}
