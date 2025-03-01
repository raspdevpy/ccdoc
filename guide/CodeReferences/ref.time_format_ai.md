# Understanding Time Formats

Many functions require you to specify a time format to correctly construct date and time values. This guide explains the accepted time format macros you can use.

For example, the [`$timeToDate`](../Date/timeToDate.md) function uses these formats.

### Available Time Format Macros

The following table details the available time format macros and their descriptions:

| Macro   | Description                                       | Example     |
| :------- | :------------------------------------------------ | :---------- |
| `d`     | Day number of the month                           | `9`         |
| `0d`    | Day number of the month with leading zero        | `09`        |
| `dn`    | Day name of the week                              | `Sunday`    |
| `y`     | Year number                                      | `2022`      |
| `hr`    | Hour in 24-hour format                             | `20` (8 PM) |
| `0hr`   | Hour in 24-hour format with leading zero          | `05` (5 AM) |
| `hr/12` | Hour in 12-hour format                             | `8`         |
| `0hr/12`| Hour in 12-hour format with leading zero          | `08`         |
| `ms`    | Milliseconds                                       | `1`         |
| `0ms`   | Milliseconds with leading zeros                   | `001`       |
| `min`   | Minutes                                            | `9`         |
| `0min`  | Minutes with leading zero                          | `09`        |
| `m`     | Month number                                       | `8` (August)|
| `0m`    | Month number with leading zero                     | `08`        |
| `mn`    | Month name                                         | `February`  |
| `s`     | Seconds                                            | `20`        |
| `0s`    | Seconds with leading zero                          | `03`        |
| `ampm`  | AM/PM indicator                                   | `PM` / `AM` |
| `tz`    | Timezone abbreviation                             | `UTC`       |