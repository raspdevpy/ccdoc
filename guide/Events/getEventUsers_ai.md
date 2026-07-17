# $getEventUsers

Retrieves a list of users who have expressed interest in a specific event.

## Usage

```bash
$getEventUsers[event id;separator (default is ', ')]
```

**Parameters:**

*   **`event id`**: (Required) The unique identifier of the event you want to retrieve the user list for.  This is typically a numerical ID.
*   **`separator`**: (Optional) The character(s) used to separate the user IDs in the output string.  Defaults to `, ` (a comma followed by a space) if not specified.

## Example

This example demonstrates how to retrieve the users interested in an event with the ID `123456789123456789`.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $getEventUsers[123456789123456789]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    123456789, 987654321
  </discord-message>
</discord-messages>

**Explanation:**

In this example, the command `$getEventUsers[123456789123456789]` is executed. The bot then returns a comma-separated list of user IDs (`123456789, 987654321`) who have shown interest in the event with the ID `123456789123456789`.