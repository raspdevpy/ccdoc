# $mentioned
Returns the ID of one of the users that was mentioned by the user

#### Usage: `$mentioned[number]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $mentioned[1] <DiscordMention :highlight="true">Member</DiscordMention>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		787695068306866198
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Mentioned" vertical="middle" /> <Badge type="tip" text="Member Mention" vertical="middle" /> <Badge type="tip" text="Ping" vertical="middle" /> <Badge type="tip" text="User Ping" vertical="middle" />