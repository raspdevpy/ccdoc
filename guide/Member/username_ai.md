# $username

Returns the username of the user who executed the command, or the username of a specific member.

#### Usage:

`$username[userid (optional, default=$authorID)]`

*   **`userid` (optional):**  The ID of the user you want to retrieve the username from. If omitted, it defaults to the ID of the command author ( `$authorID` ).

<br/>

**Example:**

```discord
!!exec $username
```

**Result:**

```discord
Member  (Assuming the command was executed by a user named "Member")
```

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $username
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

::: tip Related Functions

*   [`$nickname`](../Member/nickname.md):  Retrieves the current nickname of a member.
*   [`$discriminator`](../Member/discriminator.md): Retrieves the discriminator (the four-digit number after the username, e.g., #1234) of a member.
*   [`$userTag`](../Member/userTag.md): Returns the member's username and discriminator (e.g., Username#1234).

:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />