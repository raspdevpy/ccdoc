# $ObjectKeyExists

To check if a key is exists in the object, returns true or false

## Usage

```bash
$ObjectKeyExists[Key;Nested Key...(optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[name;Mido]<br>$objectKeyExists[name]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        true<br><br>
        </discord-message>
</discord-messages>

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[name;Mido]<br>$objectKeyExists[name]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        false
        </discord-message>
</discord-messages>