# `$timezone`

This function sets the timezone used by subsequent date and time functions within your command. Think of it as changing the "local time" for your bot's calculations.

**Important:** This function only affects date and time calculations *after* it's called within the command's logic.

To find a valid timezone name, refer to the comprehensive list on [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).  Use the values from the "TZ database name" column.

#### Usage: `$timezone[Region/City]`

Replace `Region/City` with the desired timezone. For example, `Europe/Zurich` or `America/Los_Angeles`.

**Example:**

This example demonstrates how `$timezone` changes the output of the `$hour` function.

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec 
        UTC $hour
        after Change $timezone[Europe/Zurich]
        Europe/Zurich $hour
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		UTC 10
        after Change  Europe/Zurich 12
	</discord-message>
</discord-messages>
```

In this example:

*   First, `$hour` is called without a specified timezone, so it returns the hour in UTC (Coordinated Universal Time).
*   Then, `$timezone[Europe/Zurich]` sets the timezone to Zurich.
*   Finally, `$hour` is called again, now returning the hour in the Europe/Zurich timezone, which is UTC+2 (or UTC+1 during standard time).

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
