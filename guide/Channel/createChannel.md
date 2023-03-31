# $createChannel
Creates a channel in the server.

#### Usage: 
`$createChannel[name;type;return ID (yes/no);categoryID (optional);topic;NSFW (yes/no);Bitrate (i.e 64000, VC only);Position;Slowmode in Seconds (optional);User Limi (VC only)]`

#### Example:
`$createChannel[general;text;no]`
This will create a text channel with the name "general".

::: tip Available channel types
[This list](../CodeReferences/ref.channel_types.md) mentions all valid channel types.
:::

::: tip Related Functions
[$createThread](../Threads/createThread.md) is used to create a thread.

[$createRole](../Role/createRole.md) is used to create a role.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="createChannel" vertical="middle" /> <Badge type="tip" text="make Channel" vertical="middle" /> 