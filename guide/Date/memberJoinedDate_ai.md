# `$memberJoinedDate`

Retrieves the date and time a member joined the server. You can specify a user ID or use it without any arguments to get the join date of the command executor.

#### Usage: `$memberJoinedDate[userID;format(optional)]` or `$memberJoinedDate`

*   `userID`: (Optional) The ID of the member you want to retrieve the join date for. If omitted, it will use the command executor's join date.
*   `format`: (Optional) Specifies whether to return the date or time.  Can be either `date` or `time`. If omitted, it returns the full date and time.

**Examples:**

<br/>

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $memberJoinedDate[725721249652670555;date]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Sat Oct 31 2020
	</discord-message>
</discord-messages>
```

<br/>

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $memberJoinedDate[725721249652670555]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Sat Oct 31 2020 10:55:30 GMT+0000 (Coordinated Universal Time)
	</discord-message>
</discord-messages>
```

::: tip Timezone Information
Date functions default to UTC timezone. You can customize the timezone by following the instructions [here](./timezone.md).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="memberJoinedDate" vertical="middle" />