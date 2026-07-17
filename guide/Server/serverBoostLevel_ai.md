# $serverBoostLevel

Returns the boost level of the server.

#### Usage: `$serverBoostLevel`

This command retrieves the current boost level of the Discord server. Boost levels range from 0 (no boosts) to 3 (highest level).

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $serverBoostLevel
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 