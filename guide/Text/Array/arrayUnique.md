# $arrayUnique

Return the unique elements in the array, glued with the separator.

## Usage

```bash
$arrayUnique[Separator (default ', ');Trim Element before check? (default is yes);array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido/Rake/Rake/Mido/Azz;/]<br>$arrayUnique[, ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido, Rake, Azz
        </discord-message>
</discord-messages>