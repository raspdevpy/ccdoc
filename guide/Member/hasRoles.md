# $hasRoles
Checks if given user ID has the provided roles.

#### Usage: 
`$hasRoles[userID;roleID;roleID;...]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasRoles[$authorID;$roleID[Muted]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		false
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Has Roles" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />