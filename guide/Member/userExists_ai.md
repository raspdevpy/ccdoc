# $userExists

Checks if a user exists within the server. Returns `true` if the user exists, and `false` otherwise.

#### Usage:

`$userExists[userId]`

**Arguments:**

*   `userId`: The ID of the user to check.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userExists[$authorID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>

This example checks if the message author exists in the server and returns `true` if they do.

::: danger Warning

This function relies on the bot's cache.  The information may not be perfectly accurate unless all guild members are cached (typically only in tier 5 bots). This means it might return `false` even if a user exists if they haven't been cached yet.

:::

::: tip Related Functions

*   [$findMember](../Member/findMember.md):  Finds a member's ID based on search criteria.

:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="User" vertical="middle" /> <Badge type="tip" text="Exists" vertical="middle" /> <Badge type="tip" text="Check" vertical="middle" /> <Badge type="tip" text="Is Real" vertical="middle" /> <Badge type="tip" text="Server" vertical="middle" />