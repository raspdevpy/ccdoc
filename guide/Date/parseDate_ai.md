# $parseDate

Converts milliseconds into a human-readable date or time format.

#### Usage: `$parseDate[milliseconds; format]`

**Arguments:**

*   `milliseconds`: The number of milliseconds to convert.
*   `format`:  Specifies the desired output format.  Use `date` to get a formatted date or `time` to get a formatted time duration.

<br/>

**Example:**

This example demonstrates converting 1000 milliseconds to a time duration.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $parseDate[1000;time]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1 second
	</discord-message>
</discord-messages>

**Explanation:**

The command `$parseDate[1000;time]` converts 1000 milliseconds to a time format, resulting in the output "1 second".

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="convert" vertical="middle" /> <Badge type="tip" text="date" vertical="middle" /> <Badge type="tip" text="milliseconds" vertical="middle" />