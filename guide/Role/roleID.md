# $roleID
Returns the ID of a role.

#### Usage: 
`$roleID[ROLE NAME]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleID[muted]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		772053356378062889
	</discord-message>
</discord-messages>

::: tip Related Functions
[$findRole](../Role/findRole.md), to find a role by it's name or mention
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="get ID" vertical="middle" /> <Badge type="tip" text="Find role ID" vertical="middle" /> <Badge type="tip" text="ID" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />