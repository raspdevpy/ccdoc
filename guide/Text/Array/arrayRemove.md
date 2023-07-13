# $arrayRemove

Removes something from an array, using the index, and returns nothing.

## Usage

```bash
$arrayRemove[Index;Index... (optional);array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Hello World, how are you?; ]<br>$arrayRemove[1;2;3]<br>$arrayGet[1]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        are
        </discord-message>
</discord-messages>