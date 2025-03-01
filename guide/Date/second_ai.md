# $second

Returns the current second (0-59).

#### Usage: `$second`

This function is simple! It just retrieves the current second of the minute.

**Example:**

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $second
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		56
	</discord-message>
</discord-messages>

::: tip Timezone Considerations
Date functions default to using UTC timezone. You can change this if needed. [Learn More about Timezones](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="second" vertical="middle" /> 