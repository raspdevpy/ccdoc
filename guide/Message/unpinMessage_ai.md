# $unpinMessage

Unpins a specific message from a channel. You can either unpin the message that triggered the command, or unpin a message in another channel by providing the channel and message IDs.

## Syntax

```
$unpinMessage
$unpinMessage[channelID;messageID]
```

*   **`$unpinMessage`**: Unpins the message that triggered the command.  Requires `Manage Messages` permission in the channel.
*   **`$unpinMessage[channelID;messageID]`**: Unpins a specific message in the specified channel. Requires `Manage Messages` permission in the channel specified by `channelID`.

## Parameters

*   **`channelID`**: (Optional) The ID of the channel where the message to unpin is located.
*   **`messageID`**: (Optional) The ID of the message to unpin.

    **Note:** If `channelID` is provided, `messageID` must also be provided.

## Examples

**1. Unpinning the message that triggered the command:**

This will unpin the message the user sent that triggered the command (e.g., a command like `$unpinMessage`).

```
$unpinMessage
```

**2. Unpinning a specific message in another channel:**

This will unpin the message with ID `987654321098765432` from the channel with ID `123456789012345678`.  Replace these with the actual Channel and Message IDs you wish to unpin.

```
$unpinMessage[123456789012345678;987654321098765432]
```

**Important Considerations:**

*   The bot requires the `Manage Messages` permission in the channel where the message is being unpinned.
*   Make sure the provided `channelID` and `messageID` are valid IDs.
*   If the message is already unpinned, the function will not return an error.