# $setRoles
Gives a user specific roles and removes all other ones

#### Usage: 
`$setRoles[userID;roleID 1;roleID 2;roleID 3;...]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $setRoles[$authorID;$roleID[Muted]]
	</discord-message>
</discord-messages>

::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it

[$authorID](../Member/authorID.md), to return the ID of the command executor
:::

::: tip Related Functions
[$giveRoles](../Role/giveRoles.md), to give roles to a user

[$takeRoles](../Role/takeRoles.md), to take roles from a user

[$toggleRoles](../Role/toggleRoles.md), to toggle roles from a user
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Set role" vertical="middle" /> <Badge type="tip" text="Give Roles" vertical="middle" /> <Badge type="tip" text="Take Roles" vertical="middle" /> <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" />