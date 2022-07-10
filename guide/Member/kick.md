# $kick
Kicks a user from the server

#### Usage: 
`$kick[userID;reason(optional)]`

If member can be kicked by the bot:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $kick[$findMember[Unknown User];Spamming]
	</discord-message>
</discord-messages>

If member can be NOT be kick by the bot <Badge type="warning" text="Read Below why" vertical="middle" />:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Discord Moderator">
		!!exec $kick[$ownerID;I'm a bad moderator;10]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		❌  Failed to kick undefined!
	</discord-message>
</discord-messages>



::: tip Why can't the bot kick a member?
It could be, that your bot role, is below the member role! 

Discord prevents users (members/bots) from kicking members above their highest role
:::

::: danger Be careful with adding this to a command!
every member that can execute the command, this function is added in. Will be able to kick everyone below the bot role!

We highly suggest, not putting the bot role above "Admin" and "head moderator"
:::

::: tip Related Functions
[$ban](../Member/ban.md), to ban a member, harsh punishment

[$unban](../Member/unban.md), to unban a member, let's be nice
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="kick" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />