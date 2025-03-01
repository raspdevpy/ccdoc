# $channelExists

Checks if a channel with the provided ID exists. Returns `true` if the channel exists, and `false` if it doesn't.

#### Usage:

`$channelExists[channelID]`

**Parameters:**

*   `channelID`: The ID of the channel to check. This should be a numerical value.

<br/>

**Example:**

```
!!exec $channelExists[889102524727058463]
```

```
true
```

::: tip Example Breakdown
This example checks if a channel with the ID `889102524727058463` exists. Since a channel with that ID exists, the function returns `true`.
:::

::: tip Useful Tip
You can use the [$channelID](../Channel/channelID.md) function to retrieve the ID of a channel based on its name.  This is helpful if you don't already know the channel's ID.
:::

::: tip Related Functions
*   [$findChannel](../Channel/findChannel.md):  Finds a channel by its name.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server channel" vertical="middle" />