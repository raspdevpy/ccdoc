# $createRole
Creates a role in the server

#### Usage: 
`$createRole[name;color (optional);mentionable (optional);hoisted (optional);position (optional);permission;permission;...;return role id (yes/no, default no, optional)]`

#### Parameters:
*   **name:** The name of the role to create.
*   **color (optional):** The color of the role in hexadecimal format (e.g., `#ffa500` for orange).
*   **mentionable (optional):**  Whether the role can be mentioned (true/false). Defaults to `false`.
*   **hoisted (optional):** Whether the role is displayed separately in the member list (true/false). Defaults to `false`.
*   **position (optional):** The position of the role in the role hierarchy.  Lower numbers appear higher in the list.
*   **permission;permission;...:**  A list of permissions to grant to the role. Refer to the [Permission List](../CodeReferences/ref.permissions_list.md) for valid permission names.
*   **return role id (yes/no, optional):** Specifies whether to return the ID of the newly created role. Defaults to `no`. If set to `yes`, the function will return the role ID.

#### Example:
`$createRole[Orange;#ffa500]`
This will create a role with the name "Orange" and the color orange.

`$createRole[Moderator;#00ff00;true;true;;managemessages;kick;yes]`
This will create a role named "Moderator" with a green color, set as mentionable and hoisted and give it the manage messages and kick user permission. The ID of the created role is returned by the function.

::: tip Available Permissions
For a comprehensive list of available permissions, please see the [Permission List](../CodeReferences/ref.permissions_list.md).
:::

::: tip Related Functions

[$createChannel](../Channel/createChannel.md), creates a channel
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="createRole" vertical="middle" /> <Badge type="tip" text="make role" vertical="middle" /> 