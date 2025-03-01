# $channelSendMessage

Sends a message to a specified channel. This function allows you to send messages to any channel your bot has access to.

#### Usage: `$channelSendMessage[channelID;message;return ID (yes/no) (optional, default=no)]`

| Parameter     | Description                                                                                                                                         | Required | Default |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| `channelID`   | The ID of the channel to send the message to. You can get this by right-clicking the channel and selecting "Copy ID" (you must have Developer Mode enabled in Discord settings). | Yes      |         |
| `message`     | The message to send.  This can be plain text, embeds, buttons, menus, or any other valid Discord message content.                                                        | Yes      |         |
| `return ID`   |  `yes` or `no`.  If `yes`, the ID of the sent message will be returned. Defaults to `no`.  This is useful if you need to edit or delete the message later. | No       | `no`    |

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelSendMessage[879431439299543040;This is a fantastic message!;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This is a fantastic message!
	</discord-message>
</discord-messages>

#### Examples

Here are some examples of how to use the `$channelSendMessage` function:

### Send an Embed

![](https://i.imgur.com/YObkPAZ.png)

### Send a Button

![](https://i.imgur.com/bDJ5p3a.png)

### Send a Menu

![](https://i.imgur.com/ApX37tb.png)

You can send more complex messages with features like footers and fields by using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md). This format allows for more detailed control over your messages.

::: tip Related Functions
*   [$sendMessage](../Message/sendMessage.md): Sends a message to the channel where the command was used.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />