# $timeToDate

Convert a Unix timestamp (milliseconds since January 1, 1970 UTC) into a formatted date string. This function respects the timezone configured via the [$timeZone](../Date/timezone.md) function.

## Usage

```bash
$timeToDate[Timestamp;Format (optional)]
```

**Parameters:**

*   **Timestamp:** The Unix timestamp in milliseconds you want to convert.
*   **Format (optional):**  A string defining the desired date and time format. If omitted, a default format will be applied.

### Example:

This example converts the current timestamp (obtained using `$timeStamp`) to a `YYYY-MM-DD` format.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $timeToDate[$timeStamp;%y-%m-%d]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    2022-03-12
  </discord-message>
</discord-messages>

::: tip Accepted Time Formats
For a comprehensive list of accepted time format specifiers, refer to [this reference](../CodeReferences/ref.time_format.md).  These specifiers allow you to customize the output to display the date and time in various formats.
:::