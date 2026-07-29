# $deleteChannels

Deletes one or more channels from the server.

#### Usage:

`$deleteChannels[channelID1;channelID2;channelID3;...]`

**Parameters:**

*   `channelID1;channelID2;channelID3;...`: A semicolon-separated list of channel IDs to delete.

#### Example:

`$deleteChannels[$channelID]`

This example will delete the channel the command is executed in.  `$channelID` represents the ID of the current channel.

**Deleting Multiple Channels:**

`$deleteChannels[123456789012345678;987654321098765432]`

This example will delete the channels with IDs 123456789012345678 and 987654321098765432.

::: tip Related Functions
*   Use [$deleteRoles](../Role/deleteRoles.md) to delete roles.
*   Use [$deleteThreads](../Threads/deleteThreads.md) to delete threads.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="delete" vertical="middle" /> <Badge type="tip" text="delete Channel" vertical="middle" /> <Badge type="tip" text="remove Channel" vertical="middle" />