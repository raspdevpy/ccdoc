# $disableChannelMentions

This function prevents the bot from mentioning any channels within a message. This is useful for sanitizing output or preventing accidental channel spam.

## Usage

Simply include `$disableChannelMentions` in your code. It doesn't require any arguments.

```bash
$disableChannelMentions
```

**Example:**

Let's say you have a command that echoes back a user's input.  If the user includes a channel mention (`#general`), normally the bot would ping that channel. By using `$disableChannelMentions`, the bot will send the message, but the channel mention will be rendered as plain text and *won't* send a notification.

```bash
$disableChannelMentions
$message
```

**Before `$disableChannelMentions`:**

If a user typed `#general hello!`, the bot would ping the `#general` channel.

**After `$disableChannelMentions`:**
