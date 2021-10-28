# $rolePerms
Returns the role key permissions.

#### Usage: 
`$rolePerms[roleID;separator (optional)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasPerms[$roleID[muted]; | ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        viewchannel | readmessages
	</discord-message>
</discord-messages>

::: tip Permissions
Check this [list](../CodeReferences/ref.permissions_list.md) to view all permissions names
:::

::: tip Related Functions
[$userPerms](../Member/userPerms.md), to return all member's permissions
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="Perms" vertical="middle" /> <Badge type="tip" text="permissions" vertical="middle" /> <Badge type="tip" text="rights" vertical="middle" /> <Badge type="tip" text="hadRolePerms" vertical="middle" />