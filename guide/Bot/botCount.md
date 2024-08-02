# $botCount
Returns the amount of bots in your server/guild!

#### Usage: `$botCount`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec There are `$botCount` bots in the server!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		There are `2` bots in the server!
	</discord-message>
</discord-messages>

::: danger Warning
This data comes from the cache, not the api, therefore it may not be precise unless all the guild members are cached (which is only in tier 5).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="bots" vertical="middle" /> <Badge type="tip" text="count" vertical="middle" /> <Badge type="tip" text="amount of bots" vertical="middle" /> <Badge type="tip" text="return number" vertical="middle" />
