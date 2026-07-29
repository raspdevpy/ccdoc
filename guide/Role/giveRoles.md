# $giveRoles

Grants one or more roles to a specified user.

#### Usage:

`$giveRoles[userID;roleID 1;roleID 2;roleID 3;...]`

*   **userID:** The ID of the user you want to give roles to.
*   **roleID 1;roleID 2;roleID 3;...:** A semicolon-separated list of role IDs to grant to the user.

<br/>

**Example:**

This example grants the "Muted" role to the command executor.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $giveRoles[$authorID;$roleID[Muted]]
	</discord-message>
</discord-messages>

::: tip Useful Functions
*   ``$roleID``:  Retrieves a role's ID based on its name.
*   ``$authorID``: Returns the ID of the command executor (the user who ran the command).
:::

::: tip Related Functions
*   ``$toggleRoles``: Toggles a user's roles (adds if they don't have it, removes if they do).
*   ``$takeRoles``: Removes roles from a user.
*   ``$setRoles``: Removes all roles from a user and then grants only the specified roles.
:::

##### Difficulty: <Badge type="warning" text="Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="Give Roles" vertical="middle" /> <Badge type="tip" text="Add Role" vertical="middle" /> <Badge type="tip" text="Grant Role" vertical="middle" /> <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="Role" vertical="middle" />