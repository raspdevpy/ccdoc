# $channelSendMessage
Sends a message to a sepecified channel

#### Usage: `$channelSendMessage[channelID;message;return ID (yes/no) (optional, default=no)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelSendMessage[879431439299543040;This is a fantastic message!;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This is a fantastic message!
	</discord-message>
</discord-messages>

#### Example
### Send An Embed
![](https://i.imgur.com/YObkPAZ.png)

### Send a button
![](https://i.imgur.com/bDJ5p3a.png)

### Send a menu
![](https://i.imgur.com/ApX37tb.png)

You send more stuffs like footer, fields,... using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)

::: tip Related Functions
[$sendMessage](../Message/sendMessage.md), to send a message to the channel used
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="Messages" vertical="middle" />
