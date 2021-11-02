# $editChannel
Edits a channel by ID.

#### Usage: 
`$editChannel[channelID;categoryID/$default;name/$default;position/$default;nsfw/$default (yes/no);bitrate/$default;userLimit/$default;syncPermission (yes/no);reason (optional)]`

::: tip Available channel Types
This [list](../CodeReferences/ref.channel_types.md) of all valid channel types
:::

#### Example:
`$editChannel[$channelID;$default;new-channel-name;$default;$default;$default;$default;yes;To show the docs]`
This will edit the channel name to be "new-channel-name"

::: tip Related Functions
[$modifyChannelPerms](../Channel/modifyChannelPerms.md), to modify channel permissions
:::





##### Function Difficultly: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" /> 