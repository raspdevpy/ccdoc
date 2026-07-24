# $awaitMessage

The `$awaitMessage` function allows your bot to wait for a specific user's message or any message within a channel and then retrieve the message ID or content.

## Usage

```bash
$awaitMessage[message;userid / everyone;timeout;return message ID instead of content]
```

**Parameters:**

*   **`message` (Optional):** The message the bot will send to prompt the user for input. If omitted, no message will be sent.
*   **`userid / everyone` (Optional, Default: `everyone`):** Specifies who the bot should listen for.
    *   `userid`:  A specific user's ID. The bot will only respond to messages from this user.
    *   `everyone`: The bot will respond to any message in the channel.
*   **`timeout`:** The maximum time the bot will wait for a message (e.g., `10s`). If no message is received within the timeout period, the function will return `undefined`.
*   **`return message ID instead of content`:** Determines what the function returns. Accepts `yes` or `no`.
    *   `yes`: Returns the message ID of the user's reply.
    *   `no`: Returns the content of the user's reply (default).

**Return Value:**

Returns the user's reply (content or ID, based on the `return message ID` parameter) or `undefined` if the timeout is reached.

### Timeout

The `timeout` parameter specifies how long the bot will wait for a user's message. The format is `[number][s|m|h]` (e.g., `10s` for 10 seconds, `1m` for 1 minute).

**Important:** The maximum timeout duration is limited by the bot's tier: `60 x (bot tier + 1)` seconds.  For example, a tier 3 bot has a maximum timeout of `60 * (3 + 1) = 240` seconds.

### Example:

This example sends the message "Are you tall?" and waits for the user who executed the command to respond.  It then displays the user's answer.

```discord
!!exec Your answer is: $awaitMessage[Are you tall?;$authorID]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your answer is: $awaitMessage[Are you tall?;$authorID]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Are you tall?
    </discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        YES
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your answer is: YES
    </discord-message>
</discord-messages>