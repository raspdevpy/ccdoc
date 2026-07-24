# `$addMessageReactions`

Adds reactions (emojis) to a message by its ID.

#### Usage: `$addMessageReactions[channelId;messageId;emoji;emoji;...]`

*   **`channelId`**: The ID of the channel where the message is located.
*   **`messageId`**: The ID of the message to react to.
*   **`emoji`**: The emoji(s) to add as reactions. You can specify multiple emojis separated by a semicolon (`;`). These can be standard emojis or custom emojis.

<br/>

::: tip Example

This example demonstrates adding multiple reactions to a message using its ID.

![Example Usage](https://cdn.discordapp.com/attachments/914682255346118687/940728413315027014/Screenshot_20220208185842.jpg)

You can use the function format `{reactions}` (formatted as `curl`) to use inside functions like `$sendMessage` to easily apply reactions.

:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="add" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" /> <Badge type="tip" text="reactions" vertical="middle" />