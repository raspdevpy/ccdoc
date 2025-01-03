# $ObjectKeys

Return the Object Keys with the seperator between each key

## Usage

```bash
$ObjectKeys[Seperator (optional, default:, );Nested Property 1;Nested Property 2;...]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[user1;name;Mido]<br>$objectSet[user1;id;1234]<br>$objectSet[user1;weapon;Sword]<br>$objectSet[user2;name;Rake]<br>$objectSet[user2;id;5678]<br>$objectSet[user2;weapon;Feather]<br>$ObjectKeys[/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        user1/user2<br><br>
        </discord-message>
</discord-messages>

### Example (Getting Nested Property Keys):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $objectSet[user1;name;Mido]<br>$objectSet[user1;id;1234]<br>$objectSet[user1;weapon;Sword]<br>$objectSet[user2;name;Rake]<br>$objectSet[user2;id;5678]<br>$objectSet[user2;weapon;Feather]<br>$ObjectKeys[/;user1]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        name/id/weapon
        </discord-message>
</discord-messages>
