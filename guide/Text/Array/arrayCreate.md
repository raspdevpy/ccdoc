# $arrayCreate

Creates an array from a list

## Usage

```bash
$arrayCreate[List;separator;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $arrayCreate[Mido/Rake/Azz;/]<br>1 is $arrayGet[1]<br>2 is $arrayGet[2]<br>3 is $arrayGet[3]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1 is Mido<br>2 is Rake<br>3 is Azz
        </discord-message>
</discord-messages>