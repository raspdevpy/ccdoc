# $arrayFilter

To filter an array depend on a value of CODE, if `false` then remove that element from the array\
**Note:** Only zero-cooldown functions allowed in CODE

## Usage

```bash
$arrayFilter[Element Value;Element Index;array name]{
CODE...
}
```

### Example (Remove Hello):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[Hello/World;/]<br>$arrayFilter[value]{<br>$if[$value==Hello]{<br>false<br>}<br>}<br>$arrayJoin[/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        World
        </discord-message>
</discord-messages>