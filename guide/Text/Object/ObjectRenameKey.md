# $ObjectRenameKey

allows you to rename a key in your object

## Usage

```bash
$objectRenameKey[old key;new key name]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[name;Mido]<br>Before: $objectGet<br>$objectRenameKey[name;nick]<br>After: $objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: {"name":"Mido"}<br>After: {"nick":"Mido"}<br><br>
        </discord-message>
</discord-messages>

### Example (Nested Key):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[user;name;Mido]<br>Before: $objectGet<br>$objectRenameKey[user;name;nick]<br>After: $objectGet<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: {"user":{"name":"Mido"}}<br>After: {"user":{"nick":"Mido"}}
        </discord-message>
</discord-messages>