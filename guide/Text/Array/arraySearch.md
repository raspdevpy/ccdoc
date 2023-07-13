# $arraySearch

To search for a value in an array. If it exists, it will return the position of the value. If not, `-1` is returned.

## Usage

```bash
$arraySearch[Value to search;array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido/Rake/Azz;/]<br>Mido is in position: $arraySearch[Mido]<br>Azz is in position: $arraySearch[Azz]<br>InvalidName is in position: $arraySearch[justsomeweirdrandom]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido is in position: 1<br>Azz is in position: 3<br>InvalidName is in position: -1
        </discord-message>
</discord-messages>