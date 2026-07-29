# $modifyRole

Modifies the properties of a role, such as its name, color, mentionability, hoisted status, and position.

#### Usage:

`$modifyRole[roleID;name (optional);color (optional);mentionable (yes/no, optional);hoisted (yes/no, optional);position (optional)]`

#### Parameters:

*   `roleID`: The ID of the role you want to modify.
*   `name` (Optional): The new name for the role. If omitted, the role's name will remain unchanged.
*   `color` (Optional): The new hexadecimal color code for the role (e.g., `#666666`). If omitted, the role's color will remain unchanged.
*   `mentionable` (Optional): Whether the role can be mentioned.  Use `yes` to make it mentionable and `no` to prevent it from being mentioned. If omitted, the role's mentionability will remain unchanged.
*   `hoisted` (Optional): Whether the role should be displayed separately in the member list. Use `yes` to hoist the role and `no` to prevent it from being hoisted. If omitted, the role's hoisted status will remain unchanged.
*   `position` (Optional): The new position of the role in the role hierarchy (an integer). If omitted, the role's position will remain unchanged.  Lower numbers are higher in the hierarchy. Use with caution.

#### Example:

`$modifyRole[$roleID[moderators];New Moderator Name;#666666;yes;yes;1]`

This example will:

*   Find the role named "moderators" using `$roleID[moderators]`.
*   Change the role's name to "New Moderator Name".
*   Set the role's color to `#666666` (a gray color).
*   Make the role mentionable.
*   Hoist the role.
*   Set the role's position to 1 (highest position).

**Example Without All Parameters:**

`$modifyRole[$roleID[moderators];;;#666666;yes;yes]`

This example will:

*   Find the role named "moderators" using `$roleID[moderators]`.
*   Set the role's color to `#666666` (a gray color).
*   Make the role mentionable.
*   Hoist the role.
*   Leave the name and position as they are.

::: tip Important Notes

*   You can omit parameters by leaving them blank (e.g., `;;` to skip the name and color).
*   Use caution when modifying role positions, as incorrect positions can affect permissions.
*   The color parameter must be a valid hexadecimal color code.
:::

::: tip Used Functions

*   [$roleID](../Role/roleID.md):  Returns a role ID by its name.
:::

::: tip Related Functions

*   [$editChannel](../Channel/editChannel.md):  Modifies the name or category of a channel.
*   [$modifyRolePerms](../Role/modifyRolePerms.md): Modifies the permissions of a role.
:::

##### Function difficulty: <Badge type="tip" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="modify role" vertical="middle" /> <Badge type="tip" text="edit role" vertical="middle" /> <Badge type="tip" text="change role name" vertical="middle" />