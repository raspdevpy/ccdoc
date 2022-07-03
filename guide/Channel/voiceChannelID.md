# $voiceChannelID
This function returns the Voice Channel ID that triggered the command. It will only work with the `Voice Join/Leave` trigger.

#### Usage: `$voiceChannelID`

::: warning
This function will not work in the `Channel Creation/Deletion` trigger.
Instead, use [$eventChannelID](../Channel/eventChannelID.md).

This function only works for the `Voice Join/Leave` trigger. For other triggers, use [$channelID](../Channel/channelID.md).
:::


##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="used channel" vertical="middle" /> <Badge type="tip" text="voice channel join/leave" vertical="middle" />