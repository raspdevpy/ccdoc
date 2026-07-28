const cooldowns = require('../cooldowns.json');
function getTitle(content) {
    const match = content.match(/^#\s*(\$[a-zA-Z]+)(\s|$)/);
    return match ? match[1].trim() : null;
}
function formatDuration(ms) {
    if (ms < 1) {
        return `${(ms * 1000).toFixed(ms >= 0.1 ? 0 : 1)} μs`;
    }

    if (ms < 1000) {
        return `${ms} ms`;
    }

    const units = [
        ["day", 86400000],
        ["hour", 3600000],
        ["minute", 60000],
        ["second", 1000],
    ];

    const parts = [];

    for (const [name, value] of units) {
        const amount = Math.floor(ms / value);
        if (!amount) continue;

        parts.push(`${amount} ${name}${amount !== 1 ? "s" : ""}`);
        ms %= value;

        if (parts.length === 2) break; // e.g. "2 minutes 5 seconds"
    }

    return parts.join(" ");
}
module.exports=(page,content)=>{

    // console.log({path:page[0].filePath, content:content.slice(0, 30)})
    // return content;
    let title = getTitle(content)
    if(!title)  return content;
	const cooldown = cooldowns[title.toLowerCase()];
	if (!cooldown) return content;
    let isHardCooldown = cooldown.hardCooldown
    content+=`\n\n ## ⏱️ Function Cooldown\nThis function has a built-in cooldown to help prevent excessive usage.\n| Property | Value |
|----------|-------|
| ⏱️ Duration | ${formatDuration(cooldown.time)} |
| 🆔 Tracked By | ${cooldown.per} |
| 🌐 Scope | \`${cooldown.scope.charAt(0).toUpperCase() + cooldown.scope.slice(1)}\` |

> Functions with the same Scope share cooldowns based on the same \`Tracked By\` value.

> 💎 **Tier 3+** servers ${isHardCooldown?"cannot bypass this cooldown":"bypass this cooldown. See [Premium Perks](https://ccommandbot.com/perks)"}.
`
return content;
}

