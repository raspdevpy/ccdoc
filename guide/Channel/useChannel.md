# $useChannel
Sets the channelUsed.

#### Usage: `$useChannel[channelID]`

#### Example: 

<br/>
<discord-messages>
    <discord-message>
        !!exec $sendMessage[Hi!] $useChannel[802179504147136552] $sendMessage[Bye!] /* Bye! will be sent in the channel ID provided. */
    </discord-message>
    <discord-message :bot="true" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hi!
    </discord-message>
</discord-messages>

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="use" vertical="middle" /> <Badge type="tip" text="run" vertical="middle" />
