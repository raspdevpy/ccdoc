# $botCount

This function returns the total number of bots present in your Discord server (guild).

#### Usage: `$botCount`

Here's how you can use the `$botCount` function:

```
!!exec There are `$botCount` bots in the server!
```

This command, when executed, will display a message showing the bot count in the server.  See the example below:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec There are `$botCount` bots in the server!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		There are `2` bots in the server!
	</discord-message>
</discord-messages>

::: danger Warning
The bot count is retrieved from the bot's cache, not directly from the Discord API. This means the count might not be perfectly accurate, especially if all server members haven't been fully cached.  Full caching is typically achieved at higher bot tiers (Tier 5).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="bots" vertical="middle" /> <Badge type="tip" text="count" vertical="middle" /> <Badge type="tip" text="amount of bots" vertical="middle" /> <Badge type="tip" text="return number" vertical="middle" />