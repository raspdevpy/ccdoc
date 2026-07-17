# $eventChannelID

Returns the ID of the channel that was created or deleted. This function is used specifically for the **Channel Creation** or **Channel Deletion** triggers.

#### Usage: `$eventChannelID`

::: warning
**Important Considerations:**

*   This function is exclusively for the **Channel Creation** and **Channel Deletion** triggers.
*   For **Voice Channel Join/Leave** events, use [`$voiceChannelID`](../Channel/voiceChannelID.md) instead.
*   This function will **not** work in regular command triggers. For those triggers, use [`$channelID`](../Channel/channelID.md).
:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="used channel" vertical="middle" /> <Badge type="tip" text="channel create/delete" vertical="middle" />