# `$blackListChannelIDs`

Prevent command execution within specified channels and display a custom error message.

This function allows you to blacklist specific channels (including categories and threads) where a command cannot be executed. If a user attempts to use the command in a blacklisted channel, the bot will send a predefined error message and stop the command's execution.

## Usage

```
$blackListChannelIDs[Channel ID 1;Channel ID 2;...;Error Message]
```

*   **Channel ID 1;Channel ID 2;...**:  A semicolon-separated list of channel IDs (or names) that are blacklisted.  You can use the channel name, but using channel IDs is always recommended for accuracy.
*   **Error Message**: The message that will be sent to the user if they attempt to use the command in a blacklisted channel.  This message should be informative and helpful to the user.

**Important Notes:**

*   You can blacklist multiple channels at once by separating their IDs with semicolons.
*   The error message is required and must be placed after the list of channel IDs.
*   This function checks the channel ID *where the command was executed*.

## Example:

```
$blackListChannelIDs[123456789012345678;987654321098765432;You cannot use this command in the #games or #help channels.]
```

In this example:

*   `123456789012345678` and `987654321098765432` are the channel IDs that are blacklisted.
*   `You cannot use this command in the #games or #help channels.` is the error message that will be displayed to the user if they try to use the command in either of those channels.

**Alternative Example using Channel Names (less reliable):**

```
$blackListChannelIDs[games;help;You cannot use this command in the #games or #help channels.]
```

**Recommendation:**  Using Channel IDs is the most reliable approach. To get a channel's ID, you may need to enable Developer Mode in your Discord settings (User Settings -> Advanced -> Developer Mode).  Then you can right-click the channel and select "Copy ID".