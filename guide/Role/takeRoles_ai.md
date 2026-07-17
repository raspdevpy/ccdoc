# $takeRoles
Takes away a role from a user.

#### Usage:

`$takeRoles[userID;roleID 1;roleID 2;roleID 3;...]`

*   **userID:** The ID of the user to take the roles from.
*   **roleID 1;roleID 2;roleID 3;...:** A semicolon-separated list of role IDs to remove from the user.

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $takeRoles[$authorID;$roleID[Muted]]
	</discord-message>
</discord-messages>

**Example Breakdown:**

This example takes the "Muted" role from the user who executed the command.

*   `!!exec`:  Executes the custom command function.
*   `$takeRoles[...]`:  The function that removes roles.
*   `$authorID`:  Gets the ID of the command executor.  (See [here](../Member/authorID.md) for more info)
*   `$roleID[Muted]`:  Gets the ID of the role named "Muted". (See [here](../Role/roleID.md) for more info)

::: tip Used Functions
*   [$roleID](../Role/roleID.md):  Returns a role ID based on the role's name.
*   [$authorID](../Member/authorID.md):  Returns the ID of the command executor.
:::

::: tip Related Functions
*   [$giveRoles](../Role/giveRoles.md):  Gives roles to a user.
*   [$setRoles](../Role/setRoles.md):  Removes all roles from a user and then gives them the specified roles.
*   [$toggleRoles](../Role/toggleRoles.md):  Toggles roles on a user (adds if they don't have it, removes if they do).
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />