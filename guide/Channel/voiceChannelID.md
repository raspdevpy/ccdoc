# $voiceChannelID <Badge type="warning" text="Depreciated" vertical="middle" /> 

::: danger
This function has been depreciated!
This function is **deprecated**, please use [$vcBefore](./vcBefore.md) and [$vcAfter](./vcAfter.md) instead.
:::

Returns the Voice channelID where the user join/left in voice trigger.
If the user switches channel, this function will return the new channel.


## Usage

```bash
$voiceChannelID
```
::: warning
This function will not work in the `Channel Creation/Deletion` trigger.
Instead, use [$eventChannelID](../Channel/eventChannelID.md).

This function only works for the `Voice Join/Leave` trigger. For other triggers, use [$channelID](../Channel/channelID.md).
:::

