# $toggleRoles

Toggles roles on a user. This means it removes specified roles if the user already has them, and adds them if they don't.

#### Usage:

`$toggleRoles[userID;roleID 1;roleID 2;roleID 3;...]`

*   **userID:** The ID of the user to toggle the roles on.
*   **roleID 1;roleID 2;roleID 3;...:** A list of role IDs to toggle, separated by semicolons.

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $toggleRoles[$authorID;$roleID[Member +]]
	</discord-message>
</discord-messages>

**Example:**

This example toggles the "Member +" role on the command executor.  If the user has the role it will be removed, if they don't have it, it will be added.

::: tip Used Functions
[$roleID](../Role/roleID.md), to get the ID of a role by name.  This is used to dynamically find the role ID based on its name.
:::

::: tip Related Functions

*   [$giveRoles](../Role/giveRoles.md): Gives roles to a user.
*   [$takeRoles](../Role/takeRoles.md): Removes roles from a user.
*   [$setRoles](../Role/setRoles.md): Removes all existing roles from a user and then adds the specified roles.

:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />