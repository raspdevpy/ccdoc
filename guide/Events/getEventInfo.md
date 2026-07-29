# $getEventInfo

Retrieves information about a specific event within a guild (server).

## Usage

```bash
$getEventInfo[event id;info type]
```

**Parameters:**

*   **event id:** The unique ID of the event you want to retrieve information from. You can usually find this ID in the event's URL or through Discord's API.
*   **info type:**  Specifies the type of information you want to retrieve about the event. See the table below for valid options.

## Available Info Types

| Info Type     | Description                                                                        | Value                                                                                                                                                            |
| :------------ | :--------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | The event's unique identifier.                                                    | Event ID like `123456789123456789`                                                                                                                             |
| `name`        | The name of the event.                                                             | Event name like `My Cool Event`                                                                                                                              |
| `owner`       | The ID of the user who created the event.                                        | User ID like `123456789123456789`                                                                                                                             |
| `creator`     | Alias for `owner`. The ID of the user who created the event.                     | User ID like `123456789123456789`                                                                                                                             |
| `channel`     | The ID of the voice channel where the event is hosted (only for voice events).      | Channel ID like `123456789123456789` or `undefined` if the event isn't a voice event.                                                                     |
| `desc`        | The event's description.                                                           | Description like `This event is so cool!`                                                                                                                        |
| `start_time`  | The timestamp (in milliseconds) when the event is scheduled to start.             | Timestamp in milliseconds (e.g., `1678886400000`)                                                                                                              |
| `end_time`    | The timestamp (in milliseconds) when the event is scheduled to end.               | Timestamp in milliseconds (e.g., `1678893600000`)                                                                                                              |
| `status`      | The current status of the event.                                                   |  `active` (event is currently running) or `scheduled` (event is planned for the future)                                                                         |
| `type`        | The type of event.                                                                 | `voice` (hosted in a voice channel) or `external` (hosted on an external platform).                                                                            |
| `location`    | The location of the event (only for external events).                              | (The output will vary depending on how the event was created)                                                                                                 |
| `cover`       | The URL of the event's cover image, if one is set.                                 | Image URL or `undefined` if no cover image is set.                                                                                                           |
| `users_count` | The number of users who have expressed interest in the event.                     | Number (e.g., `25`)                                                                                                                                         |
| `url`         | The direct URL to the event.                                                      | Link (e.g., `https://discord.com/events/123456789123456789/123456789123456789`)                                                                                |
| `privacy`     | The event's privacy setting.                                                       | `private` (only members of the guild can see the event) or `public` (anyone can see the event).                                                               |

## Example

```
!!exec $getEventinfo[123456789123456789;name]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getEventinfo[123456789123456789;name]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Event Name
    </discord-message>
</discord-messages>
