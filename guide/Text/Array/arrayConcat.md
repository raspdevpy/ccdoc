# $arrayConcat

Merge new array with the current array

## Usage

```bash
$arrayConcat[List;separator;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $arrayCreate[Mido/Rake;/]<br>$arrayConcat[Azz/Finkz;/]<br>$arrayJoin[, ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido, Rake, Azz, Finkz<br><br>
        </discord-message>
</discord-messages>

### Note on Separator:
You can use regex as separator i.e `/separator/`