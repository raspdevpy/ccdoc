# $allMembersCount

Returns the total number of users the bot is currently serving across all servers it's in.

#### Usage: `$allMembersCount`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec &lt@$clientID> serves $allMembersCount users in total!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-mention>Custom Command</discord-mention> serves 6852280 users in total!
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />