# $regexMatch
Matches a string with given Regex Pattern

#### Usage: `$regexMatch[text;regexp;flags(optional);group index(optional, 0 by default)]`

#### Example: 
<br/>
<discord-messages>
    <discord-message>
        !!exec $regexmatch[Buy premium with 40 votes!;\d+]
    </discord-message>
    <discord-message :bot="true" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        40
    </discord-message>
</discord-messages>

::: tip Regex Flags
These are all regex flags: `g, i, m, u, s, y.`
::
##### Function Difficultly: <Badge type=" warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="regex" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="match" vertical="middle" />

