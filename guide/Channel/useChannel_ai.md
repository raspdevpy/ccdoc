# $useChannel

This function allows you to specify a different channel for subsequent actions within your command. It essentially redirects where the following functions will execute.

#### Usage: `$useChannel[channelID]`

*   `channelID`: The ID of the channel you want to use. Make sure the bot has access to this channel.

#### Example:

This example demonstrates how to send "Bye!" to a specific channel ID (802179504147136552) while sending "Hi!" to the channel the command was triggered in.

<br/>

<discord-messages>
    <discord-message>
        !!exec $sendMessage[Hi!] $useChannel[802179504147136552] $sendMessage[Bye!] /* Bye! will be sent in the channel ID provided. */
    </discord-message>
    <discord-message :bot="true" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hi!
    </discord-message>
</discord-messages>

**Explanation:**

1.  `$sendMessage[Hi!]`:  Sends the message "Hi!" to the channel where the command was executed.
2.  `$useChannel[802179504147136552]`: Sets the channel to the one with the ID 802179504147136552.
3.  `$sendMessage[Bye!]`: Sends the message "Bye!" to the channel specified by `$useChannel` (channel ID 802179504147136552).

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="use" vertical="middle" /> <Badge type="tip" text="run" vertical="middle" />