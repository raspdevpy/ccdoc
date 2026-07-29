# $setChannelTopic

This command allows you to change the topic (also known as the channel description) of a text channel.

## Usage

```bash
$setChannelTopic[channelID;topic]
```

**Parameters:**

*   `channelID`: The ID of the channel you want to modify.  You can use `$channelID` to refer to the current channel.
*   `topic`: The new topic you want to set for the channel.  This is a text string.

## Example

Let's say you want to set the topic of the current channel to "This channel is for memes only!".  You would use the following command:

```bash
$setChannelTopic[$channelID;This channel is for memes only!]
```

**Explanation:**

*   `$channelID`  tells the bot to use the ID of the channel where the command is executed.
*   `This channel is for memes only!` is the new topic that will be applied to the channel.

**Important Notes:**

*   Make sure the bot has the necessary permissions to manage the channel. Specifically, it needs the "Manage Channels" permission.
*   The maximum length of a channel topic is limited.  Very long topics will be truncated.