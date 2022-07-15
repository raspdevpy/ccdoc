# $messageFlags
returns message flags from the message

#### Usage: `$messageFlags`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Flags: $messageFlags
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Flags:
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge Flags="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge Flags="tip" text="Flags" vertical="middle" /> <Badge Flags="tip" text="message" vertical="middle" />