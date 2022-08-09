# $voiceChannelID

To return the voice channel id where the user join/left in voice trigger\
in situation of moving from channel to channel, this function will return the new channel\
This function is **deprecated**, please use [$vcBefore](./vcBefore.md), [$vcAfter](./vcAfter.md) instead

## Usage

```bash
$voiceChannelID
```
::: warning
This function will not work in the `Channel Creation/Deletion` trigger.
Instead, use [$eventChannelID](../Channel/eventChannelID.md).

This function only works for the `Voice Join/Leave` trigger. For other triggers, use [$channelID](../Channel/channelID.md).
:::

