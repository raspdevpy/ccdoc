# `$year`

Get the current year.

This command returns the current year based on the configured timezone (default is UTC).

#### Usage:

```
`$year`
```

**Example:**

Here's how to use the `$year` command in a Discord message:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $year
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2021
	</discord-message>
</discord-messages>

::: tip Timezone Information
Date functions default to the UTC timezone. You can customize the timezone used by your commands. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="year" vertical="middle" />