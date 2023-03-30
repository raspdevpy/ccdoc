# $sendMessage
Sends a message to a sepecified channel

#### Usage: `$sendMessage[message;return ID (yes/no) (optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $sendMessage[This is a fantastic message!;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This is a fantastic message!
	</discord-message>
</discord-messages>

#### Examples
### Sending an embed
![](https://i.imgur.com/A7UbSpj.png)

::: tip Note
You can send more structures like embed title, footer, buttons, menus through [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: tip Related Functions
[$channelSendMessage](../Message/channelSendMessage.md), to send a message to a custom channel
:::


##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="ChannelUsed" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" />
