# $hasPerms
Check if given user ID has the provided perms

#### Usage: 
`$hasPerms[userID;perms1;perm2;...]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasPerms[$authorID;sendmessages]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        true
	</discord-message>
</discord-messages>

::: tip Permissions
Check this [list](../CodeReferences/ref.permissions_list.md) to view all permissions names
:::

::: tip Related Functions
[$rolePerms](../Role/rolePerms.md), to check if a role has certain perms

[$userPerms](../Member/userPerms.md), to return ALL user's permissions
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="perms" vertical="middle" /> <Badge type="tip" text="permissions" vertical="middle" /> <Badge type="tip" text="rights" vertical="middle" /> <Badge type="tip" text="hadPerms" vertical="middle" /> 