# $sendCrosspostingMessage

Send a message to multiple channels simultaneously. This function is useful for quickly broadcasting announcements or information across various channels on your server.

## Syntax

```bash
$sendCrosspostingMessage[message;channel1;channel2;...]
```

*   **message:** The message content you want to send.  This is the text that will be displayed in each of the specified channels.
*   **channel1;channel2;...:**  A semicolon-separated list of channel names or IDs where the message will be sent. Make sure the bot has permission to send messages in all specified channels.

## Usage Notes

*   Ensure the bot has the necessary permissions (Send Messages) in each target channel.
*   Channel names are case-sensitive. Using Channel IDs is more reliable to avoid any potential naming conflicts. To use a channel ID, simply replace the channel name with its numerical ID.

## Example

This example demonstrates sending the message "Hello World!" to the channels named `#general` and `#off-topics`.

```bash
$sendCrosspostingMessage[Hello World!;general;off-topics]
```

**How to find Channel IDs:**

To use Channel IDs instead of names, you'll need to enable Developer Mode in Discord. Go to User Settings -> Advanced, and toggle Developer Mode on. Then, right-click on the channel you want to use and select "Copy ID."  You can then paste this ID into the `$sendCrosspostingMessage` function.  For example:

```bash
$sendCrosspostingMessage[Hello World!;123456789012345678;987654321098765432]
```

This would send "Hello World!" to the channels with IDs `123456789012345678` and `987654321098765432`.  Using Channel IDs is the recommended approach for reliability.