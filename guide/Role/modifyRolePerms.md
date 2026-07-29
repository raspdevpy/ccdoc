# $modifyRolePerms

Modifies the permissions of a specified role.

#### Usage:

`$modifyRolePerms[roleID;+perm1;-perm2;/perm3;+perm4;...]`

#### Parameters:

*   **`roleID`:** The ID of the role to modify.
*   **`+perm1;-perm2;/perm3;+perm4;...`:** A semicolon-separated list of permission modifications.

    *   Use `+` to **grant** a permission.
    *   Use `-` to **deny** a permission.
    *   Use `/` to **reset** a permission to its default value.

#### Example:

`$modifyRolePerms[$roleID[muted];-sendmessages;]`

This example modifies the permissions of the role named "muted" so that members with this role will not be able to send messages in the server.

::: tip Permissions List
Refer to this [list](../CodeReferences/ref.permissions_list.md) for a complete overview of available permission names.
:::

::: tip Helpful Functions
*   **[$roleID](../Role/roleID.md):**  Returns a role ID based on its name.
:::

::: tip Related Functions
*   **[$modifyChannelPerms](../Channel/modifyChannelPerms.md):** Modifies the permissions of a channel.
*   **[$modifyRole](../Role/modifyRole.md):** Edits a role's name or color.
:::

::: tip Important Notes
*   Use a `+` sign to grant a specific permission.
*   Use a `-` sign to deny a specific permission.
*   Use a `/` sign to reset a permission to its default state (neither granted nor denied).
:::

##### Function Difficulty: <Badge type="danger" text="Difficult" vertical="middle" />

###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="Modify" vertical="middle" /> <Badge type="tip" text="Modify Role" vertical="middle" /> <Badge type="tip" text="Edit Role" vertical="middle" /> <Badge type="tip" text="Change Role Permissions" vertical="middle" />