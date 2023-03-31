# $editChannel
Edits a channel.

#### Usage: 
`$editChannel[channelID;categoryID/$default;name/$default;position/$default;nsfw/$default (yes/no);bitrate/$default;userLimit/$default;syncPermission/$default (yes/no);reason (optional)]`
> If you don't want to edit something, set it to $default.

::: tip Available channel Types
[This lists](../CodeReferences/ref.channel_types.md) all valid channel types.
:::

#### Example:
`$editChannel[$channelID;$default;new-channel-name;$default;$default;$default;$default;yes;To show the docs]`
This will edit the channel name to be "new-channel-name".

::: tip Related Functions
[$modifyChannelPerms](../Channel/modifyChannelPerms.md) can be used to modify channel permissions.
:::


##### Function Difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" /> 