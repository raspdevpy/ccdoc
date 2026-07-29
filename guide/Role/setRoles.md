# $setRoles

Gives a user specific roles, removing all other roles. This is useful for setting a user's roles to a specific configuration, like assigning a "Muted" role and removing all other roles.

#### Usage:

```
$setRoles[userID;roleID 1;roleID 2;roleID 3;...]
```

*   **`userID`**: The ID of the user you want to modify roles for.
*   **`roleID 1;roleID 2;roleID 3;...`**: A semicolon-separated list of role IDs that the user should have. All other roles will be removed.

<br/>

**Example:**

Sets the command executor's roles to only the "Muted" role.

```discord
!!exec $setRoles[$authorID;$roleID[Muted]]
```

<br/>

**Explanation:**

*   `!!exec`:  Executes the command.  Replace with your bot's command prefix.
*   `$setRoles`: The function being used.
*   `$authorID`:  Gets the ID of the user who executed the command (using the `$authorID` function).
*   `$roleID[Muted]`: Gets the ID of the role named "Muted" (using the `$roleID` function).

::: tip Important Notes

*   The bot needs the **Manage Roles** permission to use this function.
*   The bot can only manage roles that are below its highest role in the server's role hierarchy.
*   Invalid role IDs or user IDs will cause the function to fail.

:::

::: tip Used Functions

*   `$roleID[roleName]`:  Returns the ID of a role, given its name. [See RoleID Documentation](../Role/roleID.md)
*   `$authorID`: Returns the ID of the command executor. [See AuthorID Documentation](../Member/authorID.md)

:::

::: tip Related Functions

*   `$giveRoles[userID;roleID 1;roleID 2;...]`: Gives roles to a user without removing existing roles. [See GiveRoles Documentation](../Role/giveRoles.md)
*   `$takeRoles[userID;roleID 1;roleID 2;...]`: Removes roles from a user. [See TakeRoles Documentation](../Role/takeRoles.md)
*   `$toggleRoles[userID;roleID 1;roleID 2;...]`: Toggles the specified roles on a user. [See ToggleRoles Documentation](../Role/toggleRoles.md)

:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />