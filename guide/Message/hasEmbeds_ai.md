# $hasEmbeds

This function checks if a specific message contains any embeds. Embeds are rich content blocks within a message, which can include things like images, links, and formatted text.

It returns `true` if the message contains at least one embed, and `false` otherwise.  This is useful for creating bots that react to messages with specific types of content.

**Important:** Uploaded images and videos are considered embeds by this function.

## Syntax

```bash
$hasEmbeds[channelID;messageID]
```

## Parameters

*   `channelID`: The ID of the channel where the message is located.
*   `messageID`: The ID of the message you want to check.

## Example

Let's say you want to check if a message with ID `1234567890` in channel `9876543210` has any embeds. You would use the following:

```bash
$hasEmbeds[9876543210;1234567890]
```

This will return either `true` or `false`.