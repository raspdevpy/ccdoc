# $messageID
returns the id of the message sent
#### Usage: `$messageID`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		789089088989809890
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge ID="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge ID="tip" text="ID" vertical="middle" /> <Badge ID="tip" text="message" vertical="middle" />