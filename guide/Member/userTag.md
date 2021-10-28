# $userTag
Returns the username and the Tag of the user that executed the command, or a member specified in the first parameter

#### Usage: 
`$userTag[userid (optional, default=$authorID)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member#1234">
		!!exec $userTag
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member#1234
	</discord-message>
</discord-messages>

::: tip Used Functions
[$autorID](../Member/authorID.md), to return the command executers ID
:::

::: tip Related Functions
[$nickname](../Member/nickname.md), to get the current nickname from a member

[$discriminator](../Member/discriminator.md), to get the current discriminator from a member

[$username](../Member/username.md), to return a member's username
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="userTag" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />