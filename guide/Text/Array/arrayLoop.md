# $arrayLoop

To loop functions in an array.
**Note:** Only zero-cooldown functions allowed in CODE

## Usage

```bash
$arrayLoop[varName;index;array name (optional)]{
CODE...
}
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[15,18,21;,]<br>$arrayLoop[age]{<br>age is $age<br>}<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        age is 15<br>age is 18<br>age is 21
        </discord-message>
</discord-messages>