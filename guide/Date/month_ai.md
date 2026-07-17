# `$month`

Returns the current month's number or name.

#### Usage: `$month[return name (yes/no)]`

This function allows you to retrieve the current month in either its numerical representation (1-12) or its full name (e.g., January, February).

*   If you use `$month` without any parameters, it will return the month's number.
*   If you use `$month[yes]`, it will return the month's name.  Any value other than `yes` or no parameter will return the month's number.

**Example:**

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $month, $month[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		11, November
	</discord-message>
</discord-messages>
```

**Explanation:**

*   The first `$month` returns the numerical representation of the current month (in this case, 11 for November).
*   The second `$month[yes]` returns the name of the current month (November).

::: tip Timezone Information
Date functions default to using the UTC timezone. You can change the timezone used by the bot. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="month" vertical="middle" />