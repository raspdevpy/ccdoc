# $timeStamp

Returns the current Unix timestamp (the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC).

**Think of it as:** Getting a numerical representation of the current date and time.

#### Usage: `$timeStamp[Return in Seconds (Yes/No)]`

*   **`Return in Seconds (Yes/No)`**:  This is an optional argument.
    *   If set to `Yes`, the function will return the timestamp in seconds instead of milliseconds.
    *   If set to `No` (or left blank), the function will return the timestamp in milliseconds.

**Alias:** This function is an alias for `$dateStamp`. You can use either one interchangeably.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $timeStamp, $timestamp[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1630841854895, 1630841854
	</discord-message>
</discord-messages>

**Explanation of the example:**

*   The first value `1630841854895` is the current time in milliseconds.
*   The second value `1630841854` is the current time in seconds because we specified `yes` in the function call.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="return" vertical="middle" /> <Badge type="tip" text="time" vertical="middle" /> <Badge type="tip" text="miliseconds" vertical="middle" />