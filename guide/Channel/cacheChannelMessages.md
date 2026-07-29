# $cacheChannelMessages

This command forces the bot to cache the latest messages from a channel. Caching messages allows the bot to access them faster, which can be useful for other commands.

**Important:** This command caches up to 50 messages for standard bots. For bots that are Tier 3 or higher, it caches up to 100 messages.

## Usage

```bash
$cacheChannelMessages[Channel ID (optional)]
```

**Explanation:**

*   `Channel ID (optional)` is the ID of the channel you want to cache messages from. This is optional.

    *   **If you provide a Channel ID:** The command will cache messages from the specified channel.
    *   **If you don't provide a Channel ID:** The command will cache messages from the channel where the command is executed (the current channel). This is equivalent to using `$channelID`.

## Examples

**Cache messages from the current channel:**

```bash
$cacheChannelMessages
```

**Cache messages from a specific channel (using its ID):**

```bash
$cacheChannelMessages[123456789012345678]
```

**Note:** Replace `123456789012345678` with the actual ID of the channel.  You can typically find the Channel ID by enabling Developer Mode in Discord settings (Appearance -> Advanced) and right-clicking on the channel.