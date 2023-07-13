# $arrayMap

To replace array values with another value.
**Note:** Only zero-cooldown functions allowed in the CODE.

## Usage

```bash
$arrayMap[Element Value;Element Index;array name (optional)]{
CODE...
}
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[15,18,21;,]<br>$arrayMap[age]{<br>age is $age<br>}<br>$arrayJoin[, ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        age is 15, age is 18, age is 21
        </discord-message>
</discord-messages>