# $dateStamp

Returns the current Unix timestamp (the number of milliseconds that have elapsed since January 1, 1970 UTC).

#### Usage: `$dateStamp[Return in Seconds (Yes/No)]`

This function allows you to retrieve the current timestamp in either milliseconds or seconds.

*   **`Return in Seconds (Yes/No)`:**  Specify whether you want the timestamp returned in seconds (enter `Yes`) or milliseconds (enter `No` or leave blank).

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $dateStamp, $dateStamp[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1630841854895, 1630841854
	</discord-message>
</discord-messages>

In this example, the first `$dateStamp` call returns the timestamp in milliseconds, while the second `$dateStamp[yes]` call returns the timestamp in seconds.

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="return" vertical="middle" /> <Badge type="tip" text="time" vertical="middle" /> <Badge type="tip" text="milliseconds" vertical="middle" />