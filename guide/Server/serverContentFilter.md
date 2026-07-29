# $serverContentFilter

Returns the content filter level of this guild. This determines the level of explicit content filtering applied to media content within the server.

#### Usage: `$serverContentFilter`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $serverContentFilter
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		All Members
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="guild moderation level" vertical="middle" /> <Badge type="tip" text="server safety level" vertical="middle" />