# $discriminator

Returns the discriminator (the four-digit number after the username, like `#1234`) of the user who executed the command, or a specified member.

#### Usage:

`$discriminator[userID (optional, defaults to $authorID)]`

<br/>

This function retrieves the discriminator of a user. If no `userID` is provided, it defaults to the author of the command.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member#1234">
		!!exec $discriminator
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1234
	</discord-message>
</discord-messages>

::: tip Used Functions
[$authorID](../Member/authorID.md) - Retrieves the ID of the command's author.
:::

::: tip Related Functions
*   [$username](../Member/username.md) - Retrieves the username of a member.
*   [$nickname](../Member/nickname.md) - Retrieves the nickname of a member.
*   [$userTag](../Member/userTag.md) - Returns the username and discriminator of a member (e.g., `Username#1234`).
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="tag" vertical="middle" /> <Badge type="tip" text="discriminator" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />