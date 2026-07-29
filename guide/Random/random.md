# $random

This function returns a random number within a specified range.

#### Usage:

`$random[min;max;allowDecimals (yes/no)(optional, default=no)]`

*   **min:** The minimum value of the range (inclusive).
*   **max:** The maximum value of the range.  The behavior of this value depends on whether decimals are allowed:
    *   **If `allowDecimals` is `no` (or omitted):**  `max` is *inclusive*.  The random number will be between `min` and `max`, *including* `max`.
    *   **If `allowDecimals` is `yes`:** `max` is *exclusive*.  The random number will be between `min` and `max`, *not including* `max`.
*   **allowDecimals:**  An optional parameter specifying whether the random number can be a decimal.  Defaults to `no` (integers only).  Acceptable values are `yes` or `no`.

## Important Notes:

*   Remember that `max` is treated differently depending on whether `allowDecimals` is set to `yes` or `no`.

<br/>

**Example:**

```discord
!!exec $random[1;6]
```

This command will return a random integer between 1 and 6 (inclusive).  Possible outputs: 1, 2, 3, 4, 5, or 6.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$random[1;6]`
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		4
	</discord-message>
</discord-messages>

**More Examples:**

*   `$random[0;1;yes]` - Returns a random decimal number between 0 (inclusive) and 1 (exclusive), such as `0.345`.
*   `$random[5;10]` - Returns a random integer between 5 and 10 (inclusive).
*   `$random[-10;10;yes]` - Returns a random decimal number between -10 (inclusive) and 10 (exclusive).

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random number" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="return a random number" vertical="middle" />