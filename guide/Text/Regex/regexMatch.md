# $regexMatch
Matches a string with the given Regex Pattern and returns the matched text or multiple matches seperated by the seperator 

#### Usage: `$regexMatch[text;regexp;flags(optional);group index(optional, 0 by default) or all;separator (optional)]`

## Note about Separator
It can only be used when group index is `all`.\
in case flag is `g` it will return all matches glued with that separator\
in case flag is not `g` it will return the whole matched text and matched groups

### Example (Find the first number):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $regexMatch[Rake owns 50$ and has 18 properties.;d+]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        50<br><br>
        </discord-message>
</discord-messages>

### Example (Find all numbers):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $regexMatch[Rake owns 50$ and has 18 properties.;d+;g;all;/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        50/18<br><br>
        </discord-message>
</discord-messages>

### Example (Find 2nd number only):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $regexMatch[Rake owns 50$ and has 18 properties.;d+;g;1]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        18
        </discord-message>
</discord-messages>

::: tip Regex Flags
These are all regex flags: `g, i, m, u, s, y.`
::
##### Function difficulty <Badge type=" warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="regex" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="match" vertical="middle" />

