# $ObjectLoop

To loop over the object\
**Note:** Only zero-cooldown functions allowed in CODE

## Usage

```bash
$ObjectLoop[key name;value name;index name;Nested Prroperty 1;Nested Property 2;...]{
CODE...
}
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[Mido;Sword]<br>$objectSet[Rake;Staff]<br>$objectLoop[name;weapon;index]{<br>$index. $name has $weapon<br>}<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1. Mido has Sword<br>2. Rake has Staff
        </discord-message>
</discord-messages>
