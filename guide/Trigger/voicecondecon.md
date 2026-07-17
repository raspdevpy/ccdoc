# Voice Join/Leave

## Basic Information
This trigger type will trigger when a user joins or leaves a voice channel.

#### Example of a voice join trigger:

![](https://cdn.discordapp.com/attachments/772051120368910371/882213865201475614/first_voice.gif)


## Main Syntax
Use this syntax to let the bot trigger when a user joins/leaves a voice channel!

`join` -> the command will trigger when a voice channel is joined


`leave` -> the command will trigger when a member left a voice channel

`join/leave=voice channel id` -> will only trigger when user joins/leaves this specific voice channel

::: danger Special event!
Because this is a special event type, you CANNOT use `$channelID` to return the channel that was joined! Use [$voiceChannelID](../Channel/voiceChannelID.md) instead
:::

::: danger DO NOT FORGET:

Set a channel used, otherwise errors will not be sent anywhere! This makes bug fixing really difficult!
:::

## More Info

Do you want to know more about the bot's syntax? You can check out [this](../Other/syntax.md) page to learn more!
