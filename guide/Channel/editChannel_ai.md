# $editChannel

Edits the properties of a channel.

#### Usage:

`$editChannel[channelID;categoryID/$default;name/$default;position/$default;nsfw/$default (yes/no);bitrate/$default;userLimit/$default;syncPermission/$default (yes/no);reason (optional)]`

> Use `$default` as a placeholder if you don't want to modify a specific property.

**Parameters:**

*   `channelID`: The ID of the channel you want to edit.
*   `categoryID`:  The ID of the category to move the channel to. Use `$default` to keep it in the same category.
*   `name`: The new name of the channel. Use `$default` to keep the current name.
*   `position`: The new position of the channel in the channel list (integer). Use `$default` to keep the current position.
*   `nsfw`: Whether the channel is NSFW (Not Safe For Work). Use `yes` or `no`. Use `$default` to keep the current setting.
*   `bitrate`: The new bitrate of the channel (for voice channels). Use `$default` to keep the current bitrate.
*   `userLimit`: The new user limit of the channel (for voice channels). Use `$default` to keep the current limit.
*   `syncPermission`: Whether to sync the channel's permissions with its category. Use `yes` or `no`. Use `$default` to keep the current setting.
*   `reason`: (Optional) The reason for editing the channel. This will be visible in the audit log.

::: tip Channel Types
Refer to [this list](../CodeReferences/ref.channel_types.md) for all valid channel types and their properties.
:::

#### Example:

`$editChannel[$channelID;$default;new-channel-name;$default;$default;$default;$default;yes;Channel name update]`

This example changes the channel name to "new-channel-name", syncs permissions with category and provides a reason for audit logs.  All other channel properties will remain unchanged.

::: tip Related Functions
Use [$modifyChannelPerms](../Channel/modifyChannelPerms.md) to manage channel permissions in more detail.
:::

##### Function Difficulty: <Badge type="danger" text="Difficult" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" />