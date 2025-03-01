# $hasPerms

Determines if a specific user has the provided Discord permissions.

#### Usage:

`$hasPerms[userID;perm1;perm2;...]`

**Parameters:**

*   `userID`: The Discord user ID to check.  You can use `$authorID` to check the message author's permissions.
*   `perm1;perm2;...`: A semicolon-separated list of Discord permissions to check.  The function will return `true` only if the user has **all** specified permissions.

<br/>

**Example:**

This example checks if the message author has the `sendmessages` permission in the current channel.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasPerms[$authorID;sendmessages]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        true
	</discord-message>
</discord-messages>

::: tip Permissions
Refer to this [list](../CodeReferences/ref.permissions_list.md) to see all available permission names.
:::

::: tip Related Functions

*   `[$rolePerms](../Role/rolePerms.md)`: Checks if a role has specific permissions.
*   `[$userPerms](../Member/userPerms.md)`: Returns all permissions a user has.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="perms" vertical="middle" /> <Badge type="tip" text="permissions" vertical="middle" /> <Badge type="tip" text="rights" vertical="middle" /> <Badge type="tip" text="hadPerms" vertical="middle" />