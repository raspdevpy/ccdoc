# $getReactionCount

Get the number of reactions for a specific emoji on a message.

## Usage

```bash
$getReactionCount[channelID;messageID;reaction]
```

**Parameters:**

*   `channelID` (optional): The ID of the channel the message is in. Defaults to the current channel if not provided. Use `$channelID` to get the current channel's ID.
*   `messageID` (optional): The ID of the message to check. Defaults to the current message's ID (the message that triggered the command) if not provided.
*   `reaction`: The emoji you want to count the reactions for (e.g., `👍`, `😂`, or a custom emoji ID).

## Example

This example shows how to use `$getReactionCount` to display how many users reacted with a thumbs-up (`👍`) to a specific message.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec Users agree with this decision: $getReactionCount[$channelID;12345678987654321;👍]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Users agree with this decision: 13
  </discord-message>
</discord-messages>

**Explanation:**

*   The command `!!exec Users agree with this decision: $getReactionCount[$channelID;12345678987654321;👍]` is executed by a user.
*   `$channelID` represents the ID of the channel the command was executed in.
*   `12345678987654321` is the ID of the message to check for reactions.
*   `👍` is the reaction (thumbs-up emoji) to count.
*   The bot replies with "Users agree with this decision: 13" because 13 users reacted to the message with the thumbs-up emoji.

**Tips:**

*   If you're using the function in the same channel as the message you want to count reactions for, you can omit the `channelID` parameter.
*   If you're using the function in the same message as the reaction you want to count, you can omit both the `channelID` and `messageID` parameters.
*   Make sure the bot has access to the channel and message you're trying to get the reaction count from.