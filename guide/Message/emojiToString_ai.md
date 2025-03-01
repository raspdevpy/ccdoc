# `$emojiToString`

This function returns the actual emoji that a user reacted with in a reaction add/remove event. This is useful for determining which specific emoji triggered the event.

## How it Works

`$emojiToString` takes the emoji identifier (usually from a reaction event) and converts it into the actual emoji character or unicode representation.

## Usage

```bash
$emojiToString
```

**Example:**

Let's say a user reacts to a message with the 👍 emoji. In a reaction add event, you might use `$emojiToString` to get the actual "👍" emoji:

```
$emojiToString 
```

This would then return:

```
👍
```

**Important Considerations:**

*   This function is primarily used within reaction add/remove events.