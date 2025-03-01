# `$humanizeMS`

Converts milliseconds into a human-readable duration string. This function is useful for displaying elapsed time or time remaining in a user-friendly format.

#### Usage: `$humanizeMS[milliseconds; limit (optional); separator (optional)]`

*   **`milliseconds`**: The number of milliseconds to convert.  This is a required argument.
*   **`limit` (optional)**:  The maximum number of units to display (e.g., if the limit is 2, it might show "2 years, 3 months" and omit days, hours, etc.). Defaults to showing all units if not specified. Must be a number.
*   **`separator` (optional)**: The separator to use between the units (e.g., ", ", " and ", etc.). Defaults to ", " (comma and space) if not specified.

**Example:**

```
!!exec $humanizeMS[$timeStamp;4;,]
```

```
52 years,5 months,26 days,and 10 hours
```

**Explanation:**

In this example:

*   `$timeStamp` (assumed to be a pre-existing variable) holds the number of milliseconds representing a specific point in time.
*   `4` is the limit; only the top 4 units (years, months, days, and hours) will be displayed.
*   `,` is used as the separator.

**Another Example (without limit or separator):**

```
!!exec $humanizeMS[86400000]
```

```
1 day
```

**Another Example (with a different separator):**

```
!!exec $humanizeMS[31536000000;2; and ]
```

```
1 year and 0 months
```

::: tip Other Timezones
Date functions by default use the UTC timezone, but you can change it. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="humanizeMS" vertical="middle" />