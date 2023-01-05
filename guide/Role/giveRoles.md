# $giveRoles
Gives a user a role

#### Usage: 
`$giveRoles[userID;roleID 1;roleID 2;roleID 3;...]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $giveRoles[$authorID;$roleID[Muted]]
	</discord-message>
</discord-messages>

::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it

[$authorID](../Member/authorID.md), to return the ID of the command executor
:::

::: tip Related Functions
[$toggleRoles](../Role/toggleRoles.md), to toggle user's roles

[$takeRoles](../Role/takeRoles.md), to take roles from a user

[$setRoles](../Role/setRoles.md), to take all roles from a user & give the specified roles back
:::


##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Give Roles" vertical="middle" /> <Badge type="tip" text="add role" vertical="middle" /> <Badge type="tip" text="give role" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" /> 