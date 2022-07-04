# $createChannel
Creates a channel in the server, if specified, in a category. 

#### Usage: 
`$createChannel[name;type;return ID (yes/no);categoryID (optional);topic;nfsw (yes/no);bitrate (i.e 64000);position;Slowdown duration;User Limit for Voice Channel]`

#### Example:
`$createChannel[general;text;no]`
This will create a text channel with the name "general".

::: tip Available channel types
[This list](../CodeReferences/ref.channel_types.md) mentions all valid channel types.
:::

::: tip Related Functions
[$createThread](../Threads/createThread.md), used to create a thread

[$createRole](../Role/createRole.md), used to create a role
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="createChannel" vertical="middle" /> <Badge type="tip" text="make Channel" vertical="middle" /> 