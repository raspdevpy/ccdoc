# $dateToTime

Converts a human-readable date string to milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).  You can optionally use [$timezone](../Date/timezone) to specify a custom timezone for accurate conversion.

## Usage

```bash
$dateToTime[Date]
```

**Parameters:**

*   `Date`: The date string you want to convert.  The date format should be in a format that JavaScript can parse, such as `MM-DD-YYYY`, `YYYY-MM-DD`, or `Month DD, YYYY`.  It's generally recommended to use `YYYY-MM-DD` for clarity.

## Example

This example converts the date `12-05-2000` to its corresponding timestamp in milliseconds.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $dateToTime[12-05-2000]
    </discord-message>

<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    975974400000
</discord-message>
</discord-messages>

**Explanation:**

The command `!!exec $dateToTime[12-05-2000]` converts the date December 5th, 2000, to its equivalent timestamp: 975974400000 milliseconds since the Unix epoch. This value can then be used for further date and time calculations.

**Important Notes:**

*   The output timestamp is in milliseconds.
*   Be mindful of the date format used, as JavaScript's date parsing can be ambiguous.  Using `YYYY-MM-DD` is recommended for consistent results.
*   If no timezone is explicitly set using `$timezone`, the script will use the default timezone of the environment where it's running. This could lead to unexpected results if the environment's timezone differs from your intended timezone. Consider using `$timezone` to ensure consistent and accurate conversions.