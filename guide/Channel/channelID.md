# `$channelID`

Returns the ID of the channel where the command is executed.  You can also use it to find the ID of another channel by providing its name.

#### Usage: `$channelID[channel name (optional)]`

*   If no channel name is provided, it returns the ID of the channel where the command was used.
*   If a channel name is provided, it returns the ID of the channel with that name.

<br/>

**Example:**

```
!!exec $channelID
```

```
839090554205241394
```

**Explanation:** The bot returns the channel ID where the `!!exec` command was used.

<br/>

**Example with channel name:**

Let's say you have a channel named `#general`.  You can get its ID like this:

```
!!exec $channelID[general]
```

If a channel named `general` exists, the output will be its ID.

::: warning
This function will **not** work with the voice channel join/leave trigger. Use [$voiceChannelID](../Channel/voiceChannelID.md) instead.

This function will **not** work with the channel creation/deletion trigger. Use [$eventChannelID](../Channel/eventChannelID.md) instead.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="command channel" vertical="middle" />