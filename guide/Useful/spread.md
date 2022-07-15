# $spread
spreads text as arguments inside functions

#### Usage: `$spread[separator (optional, default: ,);data to spread]`

#### Example: 
<br/>
<discord-messages>
    <discord-message>
        !!exec Your color is $randomtext[$spread[,;Blue,Yellow,Green]]
    </discord-message>
    <discord-message :bot="true" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your color is Yellow
    </discord-message>
</discord-messages>

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="data" vertical="middle" /> <Badge type="tip" text="spread" vertical="middle" /> <Badge type="tip" text="arguments" vertical="middle" />
