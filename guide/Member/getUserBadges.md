# $getUserBadges <Badge type="warning" text="Currently Bugged" vertical="middle" />
Returns the author's ID of the executor, which executed the Custom Command.

#### Usage: `$getUserBadges`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $getUserBadges
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Hype squad Balance
	</discord-message>
</discord-messages>

::: warning
This command is currently bugged,
since Discord added Presence Intent
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="badges" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" /> <Badge type="tip" text="discord badges" vertical="middle" /> 