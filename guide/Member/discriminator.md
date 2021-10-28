# $discriminator
Returns the tag of the user that executed the command, or a member specified in the first parameter

#### Usage: 
`$discriminator[userid (optional, default=$authorID)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member#1234">
		!!exec $discriminator
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1234
	</discord-message>
</discord-messages>

::: tip Used Functions
[$authorID](../Member/authorID.md), to get the ID from the author of the command
:::

::: tip Related Functions
[$username](../Member/username.md), to get the current username from a member

[$nickname](../Member/nickname.md), to get the current nickname from a member

[$userTag](../Member/userTag.md), to return the members username + discriminator
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="tag" vertical="middle" /> <Badge type="tip" text="discriminator" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />