# `$editMessage`

Edits a message previously sent by the bot. This function allows you to modify the content of a message.

#### Usage: `$editMessage[messageId;newMessage;channelId (optional)]`

*   **`messageId`**: The ID of the message you want to edit.
*   **`newMessage`**: The new content of the message.
*   **`channelId` (optional)**: The ID of the channel where the message is located. If omitted, the function assumes the message is in the same channel where the command is executed.

## Example

```
$editMessage[123456789012345678;This is the updated message content!]
```

In this example, the message with the ID `123456789012345678` will be edited to display "This is the updated message content!".

::: tip Used Functions
`$messageID` - Use the [`$messageID`](../Message/messageID.md) function to retrieve the ID of the message that triggered the command. This is useful if you want to edit the same message that invoked the command.
:::

::: tip Note
You can format your `newMessage` as an embed using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md). This allows you to create rich, visually appealing messages.
:::

::: tip Related Functions
*   `$deleteMessage` -  The [`$deleteMessage`](../Message/deleteMessage.md) function deletes a message from the server or in DMs.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="Edit" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" /> <Badge type="tip" text="Modify Message" vertical="middle" />