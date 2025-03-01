# $sendMessage

Sends a message to the channel where the command was executed.

#### Usage: `$sendMessage[message;return ID (yes/no) (optional)]`

**Arguments:**

*   `message`: The content of the message to send.
*   `return ID`: (Optional) Determines whether to return the ID of the sent message.  Use `yes` to return the ID, `no` to not return it. Defaults to `no` if not provided.

<br/>

**Example:**

```discord
!!exec $sendMessage[This is a fantastic message!;no]
```

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $sendMessage[This is a fantastic message!;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This is a fantastic message!
	</discord-message>
</discord-messages>

#### More Examples

**Sending an embed:**

It is recommended to use [Message Curl Format](../CodeReferences/ref.message_curl_format.md) to send more complex messages like embeds

![](https://i.imgur.com/A7UbSpj.png)

::: tip Note
You can send more complex structures like embed titles, footers, buttons, and menus through [Message Curl Format](../CodeReferences/ref.message_curl_format.md). This provides greater control over the appearance and functionality of your messages.
:::

::: tip Related Functions
*   [$channelSendMessage](../Message/channelSendMessage.md):  Send a message to a specific channel.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="ChannelUsed" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" />