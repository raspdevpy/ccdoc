# $hasRoles

Checks if a user has specific roles.

#### Usage:

`$hasRoles[userID;roleID;roleID;...]`

**Parameters:**

*   `userID`: The ID of the user you want to check.
*   `roleID`: The ID(s) of the role(s) you want to check if the user has. Separate multiple role IDs with semicolons (;).

<br/>

**Example:**

Let's say you have a role called "Muted" with the ID `123456789012345678`.  This example checks if the command author has the "Muted" role.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasRoles[$authorID;123456789012345678]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		false
	</discord-message>
</discord-messages>

**Explanation:**

*   The `$authorID` variable resolves to the ID of the user who executed the command.
*   `123456789012345678` is the example ID for the "Muted" role.
*   The function returns `false` because the author, in this case, doesn't have the specified role. If the user *did* have the role, it would return `true`.

**Checking for Multiple Roles:**

You can check for multiple roles at once:

`$hasRoles[$authorID;123456789012345678;987654321098765432]`

This would check if the author has *both* the role with ID `123456789012345678` *and* the role with ID `987654321098765432`.  It returns `true` only if the user has *all* specified roles.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Has Roles" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />