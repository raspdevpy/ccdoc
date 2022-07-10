# $mentionedChannels
Returns the ID of one of the channels that was mentioned by the user

#### Usage: `$mentionedChannels[number]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $mentionedChannels[1] <mention type="channel">user-support</mention>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Mentioned" vertical="middle" /> <Badge type="tip" text="Channel Mention" vertical="middle" /> <Badge type="tip" text="Ping" vertical="middle" /> <Badge type="tip" text="Channel Ping" vertical="middle" />