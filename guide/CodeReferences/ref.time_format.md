# Time Format
Some functions needs accept time formats to help you construct the date and time.

like [$timeToDate](../Date/timeToDate.md)

### Accepted Time Format
| Macro | Brief description |
|:-------:|-------------------|
| d | day number of the month like 9 |
| 0d | day number but with padding zero like 09 |
| dn | day name of the week like Sunday |
| y | year number like 2022 |
| hr | hour in 24-format like 20 (8 PM) |
| 0hr | hour in 24-format but with padding zero like 05 (5 AM)  |
| hr/12 | hour in 12-format like 8 |
| 0hr/12 | hour in 12-format but with padding zero like 05 |
| ms | milliseconds like 1 |
| 0ms | milliseconds but with padding zeros like 001 |
| min | minutes like 9 |
| 0min | minutes but with padding zero like 09 |
| m | month number like 8 (August) |
| 0m | month number but with padding zero like 08  |
| mn | month name like February |
| s | seconds like 20 |
| 0s | seconds but with padding zero like 03 |
| ampm | PM / AM |
| tz | Timezone used like UTC |