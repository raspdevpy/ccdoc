# $messageExists
returns true/false if the message exists

#### Usage: `$messageExists[channelID;messageID]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageExists[$channelID;$messageID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge  type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge  type="tip" text="Exists" vertical="middle" /> <Badge  type="tip" text="message" vertical="middle" />
