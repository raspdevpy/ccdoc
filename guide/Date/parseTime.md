# $parseTime

Convert human-readable time strings into milliseconds. This function allows you to easily specify durations using common time units (seconds, minutes, hours, days, etc.) and get the equivalent value in milliseconds.

## Usage

```
$parseTime[time]
```

**Argument:**

*   `time`:  A string representing the time duration you want to convert.  Supported units include `s` (seconds), `m` (minutes), `h` (hours), `d` (days), `w` (weeks), `M` (months - 30 days), and `y` (years - 365 days).

## Example

This example shows how to use `$parseTime` to convert 1 minute into milliseconds.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $parseTime[1m]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    60000
  </discord-message>
</discord-messages>

**Explanation:**

*   The user enters the command `!!exec $parseTime[1m]`.
*   `$parseTime[1m]` converts "1m" (1 minute) into its equivalent in milliseconds, which is 60000.
*   The bot then outputs the result: `60000`.