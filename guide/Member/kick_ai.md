# $kick

Kicks a specified user from the server.

#### Usage:

`$kick[userID;reason(optional)]`

*   **userID:** The ID of the user to kick. You can use functions like `$findMember` to get the user ID.
*   **reason:** (Optional) The reason for the kick. This will be displayed in the audit log.

#### Examples:

**Successfully kicking a user:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $kick[$findMember[Unknown User];Spamming]
	</discord-message>
</discord-messages>

This example demonstrates kicking a user named "Unknown User" for "Spamming".  `$findMember` retrieves the user's ID.

**Unsuccessful kick attempt:**

<Badge type="warning" text="Read Below why" vertical="middle" />

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $kick[$ownerID;I'm a bad moderator;10]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		❌  Failed to kick 1234567!
	</discord-message>
</discord-messages>

This example shows a failed attempt to kick the server owner (identified by `$ownerID`). The bot reports an error because it lacks sufficient permissions. The reason for this is outlined below.  The `10` after the reason is ignored as there are only 2 possible arguments

::: tip Why can't the bot kick a member?

The most common reason a bot fails to kick a member is due to role hierarchy. Discord prevents members (including bots) from kicking users with roles higher than their highest role. Ensure the bot's role is positioned *above* the role of the user you're trying to kick.
:::

::: danger Important Security Considerations!

Granting kick permissions via custom commands should be done with extreme caution! Any member able to execute the command containing this function will be able to kick any user below the bot's highest role.

**Recommendation:** Avoid placing the bot's role higher than roles like "Admin" or "Head Moderator" to minimize potential abuse.
:::

::: tip Related Functions

*   [$ban](../Member/ban.md):  Bans a member from the server (more severe).
*   [$unban](../Member/unban.md):  Unbans a previously banned member.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="kick" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />