# $ObjectValues

Return the Object values with seperator between each value

## Usage

```bash
$ObjectValues[Seperator (optional, default:, );Nested Propery 1;Nested Property 2]
```

### Example (Get values of nested property):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $ObjectSet[name;Mido]<br>$objectSet[age;300]<br>$ObjectValues<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido, 300<br><br>
        </discord-message>
</discord-messages>

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[user;name;Mido]<br>$objectSet[user;id;1234]<br>$objectSet[user;weapon;Sword]<br>$ObjectValues[/;user]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido/1234/Sword
        </discord-message>
</discord-messages>