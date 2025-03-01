# $voiceChannelID <Badge type="warning" text="Deprecated" vertical="middle" />

::: danger
**This function is deprecated and should no longer be used!**

Please use [$vcBefore](./vcBefore.md) and [$vcAfter](./vcAfter.md) instead.  These functions provide more control and flexibility.
:::

Returns the ID of the voice channel a user joined or left in a voice trigger event. If a user switches channels, this function will return the ID of the *new* channel they joined.

## Usage

```bash
$voiceChannelID
```

## Important Considerations

::: warning
*   This function **will not work** in the `Channel Creation/Deletion` trigger.  Use [$eventChannelID](../Channel/eventChannelID.md) for those events.
*   `$voiceChannelID` is specifically designed for the `Voice Join/Leave` trigger. Using it in other triggers will not produce the desired result. For other triggers, use the more general [$channelID](../Channel/channelID.md).
:::