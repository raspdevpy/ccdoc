# $getMessage

Retrieves information about a specific message using its ID. This function allows you to access various aspects of a message, such as its content, author, and more.

## Syntax

```bash
$getMessage[channelID;messageID;attribute]
```

## Parameters

*   `channelID`: The ID of the channel where the message is located.
*   `messageID`: The ID of the message you want to retrieve information from.
*   `attribute`:  Specifies which piece of information you want to retrieve from the message.  Available attributes are:

    *   `content`: The message's text content.
    *   `userID`: The ID of the user who sent the message.
    *   `description`: (Applicable for embeds only) The description of the embed associated with the message. If the message has no embed or the embed has no description, this will return an empty string.

## Example Usage

Let's say you have a message with the ID `123456789012345678` in channel `987654321098765432`.

1.  **Getting the message content:**

    ```bash
    $getMessage[987654321098765432;123456789012345678;content]
    ```

    This would return the text content of the message.  For instance, if the message said "Hello, world!", the function would return "Hello, world!".

2.  **Getting the user ID of the message sender:**

    ```bash
    $getMessage[987654321098765432;123456789012345678;userID]
    ```

    This would return the user ID of the user who sent the message, such as `456789012345678901`.

3.  **Getting the embed description (if the message contains an embed):**

    ```bash
    $getMessage[987654321098765432;123456789012345678;description]
    ```

    This would return the description of the embed within the message. If there is no embed or if the embed lacks a description, an empty string will be returned.
