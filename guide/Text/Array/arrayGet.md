# $arrayGet
Returns the value of an element at the specified index in an array.

## Usage

```bash
$arrayGet[index;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido/Rake/Azz;/]<br>First is $arrayGet[1]<br>Second is $arrayGet[2]<br>Third is $arrayGet[3]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        First is Mido<br>Second is Rake<br>Third is Azz
        </discord-message>
</discord-messages>