# $emojisFromMessage

This function extracts all unicode and custom emojis from a user's message or provided text.

## Usage

You can use `$emojisFromMessage` in two ways:

**1. From User Message (Default):**

```bash
$emojisFromMessage
```

This will extract emojis from the message that triggered the command.

**2. From Custom Text:**

```bash
$emojisFromMessage[text;separator (optional)]
```

*   **`text`**: The text you want to extract emojis from.
*   **`separator`**: (Optional) The character(s) you want to use to separate the extracted emojis.  If omitted, the emojis will be returned without a separator.

## Example

Let's say a user sends the following message:

`Hello! 👋 This is a test message with :custom_emoji: and ❤️ some more text.`

Then consider these usages:

**Example 1: Extracting emojis from the user's message using the default usage.**

```
$emojisFromMessage
```

This would return:

`👋❤️:custom_emoji:` (Emojis returned without a separator).

**Example 2: Extracting emojis from the user's message, separated by a comma and a space.**

```
$emojisFromMessage[;, ]
```

This would return:

`👋, ❤️, :custom_emoji:` (Emojis returned separated by ", ").

**Example 3: Extracting emojis from specific text with a dash as a separator.**

```
$emojisFromMessage[This has 🎉 one and 😁 two emojis; - ]
```

This would return:

`🎉 - 😁`

**Explanation:**  The first example uses the default behavior and extracts all emojis from the message that triggered the command. The second example shows how to provide a separator for better readability. The third example demonstrates extracting emojis from a specific text string rather than the user's message.