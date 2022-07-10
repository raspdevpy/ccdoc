# $toggleRoles
To remove roles from a user if he/she already haves them, or add these roles if he/she does not

#### Usage: 
`$toggleRoles[userID;roleID 1;roleID 2;roleID 3;...]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $toggleRoles[$authorID;$roleID[Member +]]
	</discord-message>
</discord-messages>

::: tip Used Functions
[$roleID](../Role/roleID.md), to get the ID of a role by name
:::

::: tip Related Functions

[$giveRoles](../Role/giveRoles.md), to give roles to a user

[$takeRoles](../Role/takeRoles.md), to take roles from a user

[$setRoles](../Role/setRoles.md), to take all roles from a user & give the specified roles back
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Toggle roles" vertical="middle" /> <Badge type="tip" text="Give Roles" vertical="middle" /> <Badge type="tip" text="Take Roles" vertical="middle" /> <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" />