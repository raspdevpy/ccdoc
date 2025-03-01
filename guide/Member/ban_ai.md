# $ban

Bans a user from the server.

#### Usage:

`$ban[userID;reason;messages to delete (in days)]`

*   **userID:** The ID of the user to ban.
*   **reason:** The reason for the ban.
*   **messages to delete (in days):**  The number of days of messages from the user to delete (0-7).  Discord limits this to a maximum of 7 days.

<br/>

**Example: Successful Ban** (If the bot has sufficient permissions)

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $ban[$findMember[Unknown User];Spamming;7]
	</discord-message>
</discord-messages>

<br/>

**Example: Unsuccessful Ban** (If the bot does *not* have sufficient permissions) <Badge type="warning" text="See Explanation Below" vertical="middle" />

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $ban[$ownerID;I'm a bad moderator;7]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		❌  Failed to ban 1234567!
	</discord-message>
</discord-messages>

::: tip
You can set the number of days of messages to delete to a maximum of 7, as limited by Discord.
:::

::: tip Why can't the bot ban a member?
The most common reason is that the bot's role is lower in the role hierarchy than the member you are trying to ban.

Discord prevents users (including bots) from banning members with a higher or equal highest role.  Ensure the bot's highest role is above the target user's.
:::

::: danger Be extremely careful with this function!
If any member who can execute the command containing this function has sufficient permissions, they will be able to ban *any* member below the bot's highest role.

**Recommendation:** Avoid placing the bot's role above "Admin" or "Head Moderator" roles to limit potential misuse.
:::

::: tip Related Functions
*   [$kick](../Member/kick.md):  Kicks a member from the server.
*   [$unban](../Member/unban.md):  Unbans a previously banned member.
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="ban" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />