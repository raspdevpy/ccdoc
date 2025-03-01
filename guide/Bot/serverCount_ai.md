# $serverCount

This function returns the total number of servers (guilds) the bot is currently in. It's a simple way to display the bot's reach.

#### Usage: `$serverCount`

This function doesn't require any arguments. Just include it in your command response.

<br/>

**Example:**

```
!!exec I am in $serverCount servers.
```

**Output:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec I am in $serverCount servers.
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I am in 15000 servers.
	</discord-message>
</discord-messages>

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="serverCount" vertical="middle" /> <Badge type="tip" text="botServerCount" vertical="middle" /> <Badge type="tip" text="OS" vertical="middle" /> <Badge type="tip" text="stats" vertical="middle" />