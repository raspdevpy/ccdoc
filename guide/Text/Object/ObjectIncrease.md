# $ObjectIncrease

To increase a key value, if the key doesn't exist, it will create one and set to that value

## Usage

```bash
$ObjectIncrease[Key;Amount]
```

### Notes on Amount:
* It can be a number like `5`, or negative `-5` to reduce instead of increase\
* It can be expression like x*2 where `x` is the current value

### Example 1:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectIncrease[Mido;10]<br>$objectIncrease[Rake;5]<br>$objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        {"Mido":10,"Rake":5}<br><br>
        </discord-message>
</discord-messages>

### Example 2:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectIncrease[Mido;10]<br>$objectIncrease[Mido;x*2]<br>$objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        {"Mido":20}
        </discord-message>
</discord-messages>
