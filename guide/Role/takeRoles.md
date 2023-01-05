# $takeRoles
Takes away a role

#### Usage: 
`$takeRoles[userID;roleID 1;roleID 2;roleID 3;...]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $takeRoles[$authorID;$roleID[Muted]]
	</discord-message>
</discord-messages>

::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it

[$authorID](../Member/authorID.md), to return the ID of the command executor
:::

::: tip Related Functions
[$giveRoles](../Role/giveRoles.md), to give roles to a user

[$setRoles](../Role/setRoles.md), to take all roles from a member, and only give back teh specified

[$toggleRoles](../Role/toggleRoles.md), to toggle roles from a user
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Take Roles" vertical="middle" /> <Badge type="tip" text="remove role" vertical="middle" /> <Badge type="tip" text="take role" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" /> 