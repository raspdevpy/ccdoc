# $guildEvents

Retrieve a list of events happening in your Discord server.

You can specify what information you want to retrieve about the events (`info type`) and filter the events based on their status (`filter`).

**Info Types:**

*   `id`:  Returns the IDs of the events.
*   `name`: Returns the names of the events.

**Filters:**

*   `active`:  Returns only currently active events.
*   `scheduled`: Returns only scheduled events.

## Usage

```
$guildEvents[info type;filter;separator]
```

**Parameters:**

*   `info type`:  The type of information to retrieve (either `id` or `name`).
*   `filter`: The filter to apply to the events (either `active` or `scheduled`).  Leave blank for no filter.
*   `separator`: (Optional) The separator to use between the event details in the output.  Defaults to `, `.

## Example

This example retrieves the names of all active events in the server, separated by a forward slash `/`.

```
!!exec $guildEvents[name;active;/]
```

**Result:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $guildEvents[name;active;/]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Event 1/Event 2
  </discord-message>
</discord-messages>