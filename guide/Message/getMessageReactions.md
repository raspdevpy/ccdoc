# $getMessageReactions

This command retrieves the reactions present on a specified message.

## How it Works

The `$getMessageReactions` command allows you to list the reactions (emojis) that have been added to a particular message.  It can be used to gather information about how users are responding to a message.

## Usage

```bash
$getMessageReactions[Channel ID (optional);Message ID (optional);Separator (optional)]
```

## Parameters

*   **`Channel ID` (Optional):**  The ID of the channel containing the message.  If not provided, the command defaults to the current channel where the command is executed.
*   **`Message ID` (Optional):** The ID of the message you want to get reactions from. If not provided, the command defaults to the message ID where the command is executed (if it's responding to a message).
*   **`Separator` (Optional):**  The character or string used to separate the list of reactions. The default separator is a comma (`,`).

## Examples

*   **Get reactions from the current message in the current channel (most common use):**

    ```bash
    $getMessageReactions
    ```

    This will return a comma-separated list of reactions from the message the command is replying to. For example: `👍,👎,❤️`

*   **Get reactions from a specific message in the current channel:**

    ```bash
    $getMessageReactions[$messageID]
    ```

    Replace `$messageID` with the actual message ID.

*   **Get reactions from a specific message in a specific channel:**

    ```bash
    $getMessageReactions[123456789012345678;987654321098765432]
    ```

    Replace `123456789012345678` with the Channel ID and `987654321098765432` with the Message ID.

*   **Get reactions from a specific message in a specific channel, using a custom separator:**

    ```bash
    $getMessageReactions[123456789012345678;987654321098765432; | ]
    ```

    This will separate the reactions with ` | ` instead of a comma.  For example: `👍 | 👎 | ❤️`