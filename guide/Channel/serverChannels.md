# $serverChannels

This function retrieves a list of all channels within the current server (guild).

## Usage

```bash
$serverChannels[info (optional, default: name); type (optional, default: all); separator (optional, default: ", ")]
```

**Parameters:**

*   **`info`**: (Optional) Specifies what information about each channel should be returned.  Defaults to the channel's name.
    *   Possible values:
        *   `name`: Returns the channel's name.
        *   `id`: Returns the channel's ID.

*   **`type`**: (Optional)  Filters the channels based on their type. Defaults to `all` (returns all channels).
    *   Possible values:
        *   `all`: Returns all channels (text, voice, category, etc.).
        *   `text`: Returns only text channels.
        *   `voice`: Returns only voice channels.
        *   `category`: Returns only category channels.

*   **`separator`**: (Optional)  The string used to separate the channel information in the returned list. Defaults to ", ".

## Example

This example retrieves the names of all text channels in the server, separated by forward slashes.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $serverChannels[name;text;/]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        channel1/channel2/channel3/channel4
    </discord-message>
</discord-messages>

::: tip Info
*   The `info` parameter determines what information you get for each channel.
*   The `type` parameter lets you filter the channels returned.
:::

::: tip Channel Types:

*   **all**: Returns all channels.
*   **text**: Returns only text channels.
*   **voice**: Returns only voice channels.
*   **category**: Returns only category channels.
:::

::: tip Related Functions

*   [$categoryChannels](../Channel/channelExists.md):  Get channels within a specific category.
:::