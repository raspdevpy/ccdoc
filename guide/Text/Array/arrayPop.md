# $arrayPop

Removes, and returns the last element in an array.

## Usage

```bash
$arrayPop[array name (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Mido/Rake/Azz;/]<br>last one is $arrayPop<br>before it is $arrayPop<br>before it is $arrayPop<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        last one is Azz<br>before it is Rake<br>before it is Mido
        </discord-message>
</discord-messages>