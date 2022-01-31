# $useChannel
Executes the code after it in the specified channel id.

#### Usage: `$useChannel[channel id]`

#### Example: 
<br/>
<discord-messages>
    <discord-message>
        !!exec Hi! $useChannel[98713xx...] Bye!
    </discord-message>
    <discord-message :bot="true" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hi!
    </discord-message>
</discord-messages>
