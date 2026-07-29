# $eventExists

Checks if an event with the specified ID exists.

## Usage

```bash
$eventExists[event id]
```

**Parameters:**

*   `event id`: The ID of the event you want to check.  This is usually a string of characters representing a unique event created in your bot's system.

## Example

This example demonstrates using `$eventExists` to check for an event with an invalid ID.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $eventExists[Invalid event id]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    false
  </discord-message>
</discord-messages>

**Explanation:**

*   The user enters the command `!!exec $eventExists[Invalid event id]`.
*   The `$eventExists` function checks if an event exists with the ID `Invalid event id`.
*   Since no event with that ID exists, the function returns `false`.