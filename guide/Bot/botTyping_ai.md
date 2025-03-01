# $botTyping

Simulates the bot typing in the current channel. This will display the "Bot is typing..." indicator to users in the channel for approximately 10 seconds.

**Important Note:** Due to limitations within the Discord API, the typing duration cannot be customized and is fixed at around 10 seconds.

## Usage

To trigger the bot typing indicator, simply use the `$botTyping` function.

```markdown
$botTyping
```

**Example:**

If used within a command, the bot will display the "Bot is typing..." indicator for 10 seconds when the command is executed.
```
$botTyping
```
