# $role

A powerful and compact function to retrieve various properties of a Discord role!

### Usage: `$role[roleid;property]`

This function takes two arguments:

*   `roleid`: The ID of the role you want to get information from.
*   `property`: The specific piece of information you want to retrieve.

#### Supported Properties:

Here's a list of the available properties you can use with the `$role` function:

*   `name`:  The role's name (e.g., "Moderator").
*   `mention`: The role's mention string (e.g., `<@&1234567890>`).
*   `id`: The role's ID (e.g., `1234567890`).
*   `hex`: The role's color in hexadecimal format (e.g., `#FF0000` for red).
*   `color`: The role's color as a 10-base number.
*   `created`: The date and time when the role was created.
*   `position`: The role's position in the role hierarchy. Lower numbers mean higher priority.
*   `rawposition`: The role's raw position in the role list.
*   `guildid`: The ID of the guild (server) where the role exists.
*   `guildname`: The name of the guild (server) where the role exists.
*   `timestamp`: The creation timestamp of the role.
*   `ismentionable`: Returns `true` if the role can be mentioned, `false` otherwise.
*   `iseditable`: Returns `true` if the bot can edit the role, `false` otherwise.
*   `ismanaged`: Returns `true` if the role is managed by an integration (like a bot), `false` otherwise.
*   `ishoisted`: Returns `true` if the role is hoisted (displayed separately in the member list), `false` otherwise.
*   `usercount`: The number of users who have this role. (Note: This value is cached and might not be perfectly up-to-date.)
*   `icon`: Returns the role's icon URL if it exists. Returns `undefined` if the role has no icon.

<br/>

#### Example:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $role[798789079070970;position]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2
	</discord-message>
</discord-messages>

This example retrieves the position of the role with the ID `798789079070970`. The bot responds with `2`, indicating the role's position in the role hierarchy.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" />