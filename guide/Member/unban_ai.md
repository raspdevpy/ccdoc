# $unban

Unbans a user from the server. This function allows you to remove a ban from a user, granting them access back into the server.

#### Usage:

`$unban[userID;reason]`

*   **userID:** The ID of the user you want to unban. You can obtain this ID by enabling Developer Mode in Discord settings and right-clicking on a user.
*   **reason:** The reason for unbanning the user. This will be displayed in the audit log.

**Example:**

If the bot has the necessary permissions to unban the member:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $unban[898908909879675454;Unban because ban appeal was successful]
	</discord-message>
</discord-messages>

This example will unban the user with the ID `898908909879675454` and the reason "Unban because ban appeal was successful".

::: tip Related Functions
*   [$kick](../Member/kick.md): Use this to kick a member from the server.
*   [$ban](../Member/ban.md): Use this to ban a member from the server.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="unban" vertical="middle" /> <Badge type="tip" text="unpunish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />