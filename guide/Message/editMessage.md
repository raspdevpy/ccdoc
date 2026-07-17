# $editMessage
Edits a message sent by the bot.

#### Usage: `$editMessage[messageid;new message;channelid(optional)]`

## Example
```
$editMessage[123456;Your new content]
```

::: tip Used Functions
[$messageID](../Message/messageID.md), to return the ID from the message used to trigger the command
:::

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: tip Related Functions
[$deleteMessage](../Message/deleteMessage.md), to delete a message in the server or DMs
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Edit" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" /> <Badge type="tip" text="Modify message" vertical="middle" />
