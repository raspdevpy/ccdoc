# $hour

This command returns the current hour (in 24-hour format).

#### Usage: `$hour`

**Example:**

This example shows how to use the `$hour` command in a custom command.

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hour
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		19
	</discord-message>
</discord-messages>

::: tip Timezone Considerations
Date functions use the UTC timezone by default. You can change the timezone for your bot. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="hour" vertical="middle" />