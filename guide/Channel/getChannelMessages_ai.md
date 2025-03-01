# $getChannelMessages

Retrieves the most recent messages from a specified channel.

## Usage

```bash
$getChannelMessages[Channel ID;userID or everyone (default is everyone);ids/contents;separator;amount (max 50);reverse (yes/no, default is no)]
```

**Parameters:**

*   **`Channel ID`:**  The ID of the channel to retrieve messages from.
*   **`userID`:** (Optional) The ID of a specific user whose messages you want to retrieve. If you want to retrieve messages from all users, use `everyone` (this is the default if you omit this parameter).
*   **`ids/contents`:**  Specifies whether you want to retrieve the message IDs or the message contents.  Use `ids` to get the IDs, and `contents` to get the message content.
*   **`separator`:**  The character(s) used to separate the retrieved message IDs or contents in the output.  For example, using `/` would separate the results like: `message1/message2/message3`.
*   **`amount`:** (Optional) The maximum number of messages to retrieve (maximum is 50). Defaults to a lower number, so setting this is recommended for predictable results.
*   **`reverse`:** (Optional)  Determines the order of the messages.  `yes` reverses the order (oldest to newest), while `no` (default) returns them in the default order (newest to oldest).

## Example

This example demonstrates how to retrieve the IDs of the 2 most recent messages sent by the command invoker in the channel where the command was executed, separating them with a forward slash.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getChannelMessages[$channelID;$authorID;ids;/;2]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        982807194485555300/982807196318457918
    </discord-message>
</discord-messages>