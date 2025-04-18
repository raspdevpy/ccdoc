# $userPerms

This function returns a list of permissions a user has within the current channel.

#### Usage:

`$userPerms[userID;separator (optional)]`

*   **`userID`**: The ID of the user whose permissions you want to retrieve.
*   **`separator` (Optional)**:  The character or string used to separate the permissions in the returned list. If omitted, a default separator might be used.

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userPerms[$authorID; | ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        viewchannel | readmessages
	</discord-message>
</discord-messages>

**Example:**  The example above uses `$authorID` to get the command author's ID and returns their permissions in the current channel, separated by `|`.

::: tip Permissions Reference
For a complete list of permission names, see the [Permissions List](../CodeReferences/ref.permissions_list.md).
:::

::: tip Useful Functions

*   **`$authorID`**:  Returns the ID of the user who executed the command. See: [$autorID](../Member/authorID.md)
:::

::: tip Related Functions

*   **`$rolePerms`**: Checks the permissions of a specific role. See: [$rolePerms](../Role/rolePerms.md)
*   **`$hasPerms`**: Checks if a user has specific permissions. See: [$hasPerms](../Member/hasPerms.md)
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="Permissions" vertical="middle" /> <Badge type="tip" text="User Rights" vertical="middle" />