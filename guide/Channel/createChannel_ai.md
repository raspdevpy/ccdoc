# $createChannel

Creates a new channel within your Discord server.

#### Usage:

```
$createChannel[name;type;return ID (yes/no);categoryID (optional);topic;NSFW (yes/no);Bitrate (i.e 64000, VC only);Position;Slowmode in Seconds (optional);User Limit (VC only)]
```

#### Parameters:

*   **name:** The name of the channel.
*   **type:** The type of channel to create (e.g., `text`, `voice`, `category`). Refer to the available channel types list below.
*   **return ID (yes/no):**  Specify `yes` if you want the function to return the ID of the newly created channel, otherwise `no`.
*   **categoryID (optional):** The ID of the category to place the new channel under. If left blank, the channel will be created outside of any category.
*   **topic:**  (Optional) The topic/description of the channel.
*   **NSFW (yes/no):**  Specify `yes` if the channel should be marked as NSFW (Not Safe For Work), otherwise `no`.
*   **Bitrate (i.e 64000, VC only):** The bitrate of the voice channel (in bits per second). Only applicable for voice channels.
*   **Position:** The position of the channel in the channel list. Lower numbers appear higher.
*   **Slowmode in Seconds (optional):** The slowmode duration for the channel, in seconds. Only applicable for text channels.
*   **User Limit (VC only):** The maximum number of users allowed in the voice channel. Only applicable for voice channels.

#### Example:

```
$createChannel[general;text;no]
```

This will create a text channel named "general" in the server.

::: tip Available Channel Types
For a complete list of valid channel types, see [this reference page](../CodeReferences/ref.channel_types.md).
:::

::: tip Related Functions
*   [$createThread](../Threads/createThread.md): Use this function to create a new thread.
*   [$createRole](../Role/createRole.md):  Use this function to create a new role.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="createChannel" vertical="middle" /> <Badge type="tip" text="make Channel" vertical="middle" />