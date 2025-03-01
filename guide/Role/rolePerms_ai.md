
Returns the permissions a role has.

#### Usage:

`$rolePerms[roleID;separator (optional)]`

*   `roleID`: The ID of the role to check.
*   `separator`: (Optional) The separator to use when listing the permissions. Defaults to no separator.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $rolePerms[$roleID[muted]; | ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        viewchannel | readmessages
	</discord-message>
</discord-messages>

::: tip Permissions List
For a comprehensive list of all permission names, refer to the [Permissions List](../CodeReferences/ref.permissions_list.md).  This list includes all the permissions a role can have.

:::

::: tip Related Functions
*   [`$userPerms`](../Member/userPerms.md): Returns a member's permissions.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />