# $sendDM <Badge type="danger" text="Premium ONLY!" vertical="middle" /> 
Sends the output of the code to the author in DM's, or to the specified userID's DM's.

#### Usage: `$sendDM[userID;message]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $sendDM[$authorID;I can add this multiple times in my code! This is time 1] 
        $sendDM[$authorID;I can add this multiple times in my code! This is time 2] 
	</discord-message>
</discord-messages>

<br/>
<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Your Custom Bot" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I can add this multiple times in my code! This is time 1
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Your Custom Bot" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I can add this multiple times in my code! This is time 2
	</discord-message>    
</discord-messages>

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: tip Related Functions
[$channelSendMessage](../Message/channelSendMessage.md), to send a message to a channel in the server!

[$sendMessage](../Message/sendMessage.md), to send a message to the channel used!
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="DM" vertical="middle" /> <Badge type="tip" text="send DM Message" vertical="middle" />