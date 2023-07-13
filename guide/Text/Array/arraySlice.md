# $arraySlice

To keep only a part of the array, *slicing* it.

## Usage

```bash
$arraySlice[from;to;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido Rake Azz Finkz; ]<br>$arraySlice[2;3]<br>$arrayJoin[ ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Rake Azz
        </discord-message>
</discord-messages>