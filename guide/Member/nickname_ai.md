# $nickname

Returns the nickname of the user that executed the command, or the nickname of a specified member.

#### Usage:

`$nickname[user ID (optional, defaults to the command author's ID)]`

**Explanation:**

*   If no `user ID` is provided, the function will return the nickname of the user who triggered the command.
*   If a `user ID` is provided, the function will attempt to retrieve the nickname of the member with that ID.

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $nickname
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

**Example Scenarios:**

*   **`!!exec $nickname`**: If a user with the nickname "Member" executes this, the command will output "Member".
*   **`!!exec $nickname[123456789012345678]`**:  If a user with the ID `123456789012345678` has the nickname "Admin", the command will output "Admin". If the user does not have a nickname, it will return the username.

::: tip Related Functions
*   [$changeNickname](../Member/changeNickname.md):  Change a member's nickname.
*   [$username](../Member/username.md): Get a member's username.
*   [$discriminator](../Member/discriminator.md): Get a member's discriminator.
*   [$userTag](../Member/userTag.md): Return a member's username + discriminator (user tag).
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />