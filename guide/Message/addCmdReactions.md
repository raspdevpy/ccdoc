# `$addCmdReactions`

Reacts to the user's message with multiple emojis.

This function allows you to add multiple reactions to the message that triggered the command.

#### Usage: `$addCmdReactions[emoji1;emoji2;...]`

**Parameters:**

*   `emoji1;emoji2;...`: A semicolon-separated list of emojis to add as reactions.  You can use standard emojis (e.g., 😀, 🤪) or custom emojis (if the bot has access to them).

<br/>

::: tip Example

This example adds a checkmark and a cross emoji as reactions to the user's command message.

```
$addCmdReactions[✅;❌]
```

![](https://cdn.discordapp.com/attachments/914682255346118687/940710840892551189/Screenshot_20220208174856.jpg)

:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="add" vertical="middle" /> <Badge type="tip" text="reactions" vertical="middle" />