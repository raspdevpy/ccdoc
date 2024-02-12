# $userPerms
Returns the member key permissions.

#### Usage: 
`$userPerms[userID;separator (optional)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userPerms[$authorID; | ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        viewchannel | readmessages
	</discord-message>
</discord-messages>

::: tip Permissions
Check this [list](../CodeReferences/ref.permissions_list.md) to view all permissions names
:::

::: tip Used Functions
[$autorID](../Member/authorID.md), to return the command executers ID
:::

::: tip Related Functions
[$rolePerms](../Role/rolePerms.md), to check if a role has certain perms

[$hasPerms](../Member/hasPerms.md), to check if a member has certain perms
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="Perms" vertical="middle" /> <Badge type="tip" text="permissions" vertical="middle" /> <Badge type="tip" text="rights" vertical="middle" />
