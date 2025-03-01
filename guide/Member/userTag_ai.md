# $userTag

This function retrieves the username and tag (discriminator) of a user. By default, it returns the username and tag of the user who executed the command. You can also specify a different user by providing their ID as an argument.

#### Usage:

`$userTag[userID (optional, default=$authorID)]`

**Parameters:**

*   `userID` (optional): The ID of the user whose username and tag you want to retrieve. If not provided, it defaults to the ID of the command executor (using `$authorID`).

<br/>

**Example:**

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member#1234">
		!!exec $userTag
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member#1234
	</discord-message>
</discord-messages>
```

In this example, the command executor's username and tag (Member#1234) are returned because no `userID` was specified.

**Example with a specific user ID:**

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member#1234">
		!!exec $userTag[123456789012345678]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		AnotherUser#5678
	</discord-message>
</discord-messages>
```

If the user with ID `123456789012345678` has the username `AnotherUser` and tag `5678`, the function will return `AnotherUser#5678`.

::: tip Used Functions
*   [$autorID](../Member/authorID.md): Returns the ID of the user who executed the command.
:::

::: tip Related Functions
*   [$nickname](../Member/nickname.md): Retrieves the current nickname of a member.
*   [$discriminator](../Member/discriminator.md): Retrieves the tag (discriminator) of a member.
*   [$username](../Member/username.md): Retrieves the username of a member.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="userTag" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />