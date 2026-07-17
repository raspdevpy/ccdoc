# $resolveEmojiID

Resolves a full emoji, emoji name, or emoji ID into its ID. This function is useful for extracting the ID from an emoji, regardless of its format.

## Usage

```bash
$resolveEmojiID[emoji string/name/id]
```

## Arguments

*   `emoji string/name/id` - The emoji, emoji name, or ID of the emoji to resolve. This can be a standard emoji (e.g., :smile:), a custom emoji name (e.g., my_custom_emoji), or an emoji ID.

## Example

Let's say you have a custom emoji named `cool_emoji` in your server.

```bash
$resolveEmojiID[cool_emoji]
```

This would return the unique ID associated with the `cool_emoji` emoji.

```bash
$resolveEmojiID[<:cool_emoji:123456789012345678>]
```
