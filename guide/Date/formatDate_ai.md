# $formatDate

Formats a date provided as milliseconds, a string, or an ISO string into a specified format. You can find a detailed explanation of the formatting syntax [here](https://momentjs.com/docs/#/parsing/string-format/).

#### Usage: `$formatDate[date;format]`

*   **date:** The date to format. This can be:
    *   Milliseconds (e.g., `1678886400000`)
    *   A date string (e.g., `1/1/2023`)
    *   An ISO string (e.g., `2023-03-15T12:00:00Z`)
    *   Anything that JavaScript's `Date` object can understand.
*   **format:** (Optional) The desired output format. If omitted, the default format is used (`Sunday, 14 March 2021`).

**Example:**

<br/>

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $formatDate[$dateStamp]
             $formatDate[$dateStamp;LLLL]
                $formatDate[$dateStamp;dddd at hour HH]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Sunday, March 15 2020
        March 15 2020 1:00 PM
        Sunday at hour 10
	</discord-message>
</discord-messages>

#### Date Input Options:

*   `datestamp` - Example: `1615578797890` (Milliseconds since the Unix epoch)
*   `ms` - Example: `315569267878790ms`
*   `string date` - Example: `1/17/2021, 9:09:19 PM`
*   `String in ISO` - Example: `2000-3-12T14:48:00.000Z`

#### Format Options:

Here are some common formatting options:

*   `Blank` (default) - Example: `Sunday, 14 March 2021`
*   `LT` - Time - Example: `6:01 AM`
*   `LTS` - Time with seconds - Example: `1:58:3 AM`
*   `L` - Date - Example: `1/10/2021`
*   `LLL` - Specified Date - Example: `March 12 2020 4:02 AM`
*   `LLLL` - Specified Date with Day - Example: `Friday, March 12 2021 4:02 AM`
*   `dddd` - Day - Example: `Friday`
*   `HH` - Hour (24-hour format) - Example: `15`

::: tip Other Timezone
Date functions use the default UTC timezone. You can change this. [Learn More](./timezone.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="formatDate" vertical="middle" />