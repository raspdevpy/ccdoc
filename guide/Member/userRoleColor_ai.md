# $userRoleColor

Returns the hex color code of the user's highest role.

#### Usage

*   `$userRoleColor` - Returns the color of the user who executed the command.
*   `$userRoleColor[userID]` - Returns the color of the user with the specified User ID.

<br/>

#### Example

Here's an example of how `$userRoleColor` might be used in a command:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userRoleColor
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 #fff00
	</discord-message>
</discord-messages>

::: tip Important: Member Caching
For the default bot, the member whose role color you're trying to retrieve *must* be cached (i.e., the bot must be aware of the user).  This usually isn't an issue if the user is active in the server.

If you are using a custom bot, you can generally ignore this caching requirement.
:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="color" vertical="middle" />