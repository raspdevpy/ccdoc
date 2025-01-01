# $nickname
returns the nickname of the user the server (or the display name if you specified the 2nd input)

#### Usage: 
`$nickname[userid (optional, default=$authorID);Return Display Name If No nickname (yes/no , default yes)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $nickname
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

::: tip Related Functions
[$changeNickname](../Member/changeNickname.md), to change a member's nickname

[$username](../Member/username.md), to get the current username from a member

[$discriminator](../Member/discriminator.md), to get the current discriminator from a member

[$userTag](../Member/userTag.md), to return the members username + discriminator
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />