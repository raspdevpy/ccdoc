# `$minute`

Returns the current minute (0-59).

#### Usage:

```
$minute
```

**Example:**

This example demonstrates how to use the `$minute` function to display the current minute.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $minute
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    23
  </discord-message>
</discord-messages>

::: tip Timezone Information
By default, date and time functions use the UTC timezone. You can change the timezone used. [Learn More](./timezone.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="minute" vertical="middle" />