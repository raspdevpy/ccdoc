# $creationDate

Retrieves the creation date of a Discord entity (channel, guild, emoji, user, or role) based on its ID.

#### Usage: `$creationDate[entityID;format (optional)]`

**Arguments:**

*   `entityID`: The ID of the Discord entity you want to retrieve the creation date for.  This can be a channel ID, guild ID, emoji ID, user ID, or role ID.
*   `format` (Optional): Specifies the desired format for the output.  If omitted, the default format will be used.  Possible values are:
    *   `date`: Returns the date only.
    *   `time`: Returns the time only.
    *   `ms`: Returns the creation date in milliseconds since the Unix epoch.

**Example:**

<br/>

```
!!exec $creationDate[725721249652670555;date]
```

```
Sat Oct 31 2020 10:55:30 GMT+0000 (Coordinated Universal Time)
```

::: tip Timezone Information
Date functions default to the UTC timezone. To change this, see the [Timezone Configuration](./timezone.md) guide.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />