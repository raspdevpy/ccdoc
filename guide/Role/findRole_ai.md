# $findRole

Searches for a role by its ID, mention, or name. This function allows you to retrieve a role's ID based on the provided search query.

#### Usage:

`$findRole[ID/mention/name;return current channelID, (yes/no) (Optional, default=yes)]`

**Parameters:**

*   **`ID/mention/name`**:  The ID, mention, or name of the role you want to find.
*   **`return current channelID, (yes/no)`** (Optional):  Determines whether to return the current channel's ID if the role is found.
    *   `yes` (Default): Returns the current channel ID along with the role ID (e.g., `869243919697846379,123456789012345678` where the first number is the Role ID and the second one is the Channel ID).
    *   `no`: Returns only the role ID.

**Example:**

Finding a role named "Mika#6359" and not returning the current channel ID:

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findRole[Mika#6359;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

**Example (Role Not Found):**

If the role is not found, the function will return `undefined`.

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findRole[mika#6359;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>

::: tip Related Functions
*   [$roleID](../Role/roleID.md): Returns the role ID based on the role's name.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="find Role" vertical="middle" /> <Badge type="tip" text="Role ID" vertical="middle" /> <Badge type="tip" text="Roles" vertical="middle" /> <Badge type="tip" text="Search Roles" vertical="middle" /> <Badge type="tip" text="Found Roles" vertical="middle" />