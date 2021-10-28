# $roleExists
Returns a boolean, to check if a role exists

#### Usage: 
`$roleExists[roleID]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleExists[$roleID[muted]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>

::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it
:::

::: tip Related Functions
[$findRole](../Role/findRole.md), to find roles by name or mention
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server role" vertical="middle" /> 