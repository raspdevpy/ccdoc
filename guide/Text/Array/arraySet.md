# $arraySet

Sets the value of an index in an array.

## Usage

```bash
$arraySet[index;value;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido/Rake/Azz;/]<br>Before: $arrayGet[3]<br>$arraySet[3;Finkz]<br>After: $arrayGet[3]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: Azz<br>After: Finkz
        </discord-message>
</discord-messages>