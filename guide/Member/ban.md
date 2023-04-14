# $ban
Bans a user from the server

#### Usage: 
`$ban[userID;reason;messages to delete (in days)]`

If member can be banned by the bot:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $ban[$findMember[Unknown User];Spamming;7]
	</discord-message>
</discord-messages>

If member can NOT be banned by the bot <Badge type="warning" text="Read Below why" vertical="middle" />
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $ban[$ownerID;I'm a bad moderator;7]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		❌  Failed to ban undefined!
	</discord-message>
</discord-messages>


::: tip
You can set days at maximum of 7 days, limitation from discord.
:::

::: tip Why can't the bot ban a member?
It could be, that your bot role, is below the member role! 

Discord prevents users (members/bots) from banning members above their highest role
:::

::: danger Be really careful with adding this to a command!
EVERY member that can execute the command, this function is added in. Will be able to BAN everyone below the bot role!

We highly suggest, not putting the bot role above "Admin" and "head moderator"
:::

::: tip Related Functions
[$kick](../Member/kick.md), to kick a member instead of banning him/here

[$unban](../Member/unban.md), to unban a member,which is banned
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="ban" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />