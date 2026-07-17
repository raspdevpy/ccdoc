# $channelTopic

Retrieves the topic (or description) of a channel.

## Syntax

```bash
$channelTopic
$channelTopic[channelID]
```

## Arguments

*   `channelID` (Optional): The ID of the channel you want to retrieve the topic from. If omitted, it defaults to the channel where the command is executed.

## Example Usage

**1. Get the topic of the current channel:**

```bash
$channelTopic
```

**2. Get the topic of a specific channel:**

```bash
$channelTopic[123456789012345678]
```