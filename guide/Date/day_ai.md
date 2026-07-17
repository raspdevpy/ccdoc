# `$day`

Returns the current date. Optionally, you can also retrieve the day of the week.

#### Usage: `$day[yes/no (optional)]`

*   **`$day`**: Returns the current date (day of the month).
*   **`$day[yes]`**: Returns the current date (day of the month) followed by the day of the week.

**Example:**

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $day $day[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		25 Saturday
	</discord-message>
</discord-messages>

::: tip Timezone Information
Date functions default to the UTC timezone. You can customize the timezone used by your bot. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="day" vertical="middle" />