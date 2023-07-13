# $arrayJoin

Joins an array created using [$textSplit](../textSplit/textSplit.md) with a specific separator.

## Usage

```bash
$arrayJoin[Separator (optional);array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Rake/Mido/Azz;/]<br>$arrayJoin[, ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Rake, Mido, Azz
        </discord-message>
</discord-messages>