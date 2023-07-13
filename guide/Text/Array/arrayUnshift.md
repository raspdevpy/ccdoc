# $arrayUnshift

Adds an element to the start of the array. 

## Usage

```bash
$arrayUnshift[value;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $arrayUnshift[Mido]<br>$arrayUnshift[Rake]<br>$arrayUnshift[Azz]<br>$arrayJoin[/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Azz/Rake/Mido
        </discord-message>
</discord-messages>