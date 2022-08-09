# $checkContains

checks if given message contains any of the texts

## Usage

```bash
$checkContains[message;text1;text2;...]
```

### Example 1:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $checkContains[Mido is good;good]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        true<br><br>
        </discord-message>
</discord-messages>

### Example 2:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $checkContains[Mido is good;bad]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        false
        </discord-message>
</discord-messages>