# $hasAnyRole

Checks if the author or user have at least one of the provided role IDs

## Usage

```bash
$hasAnyRole[roleID1;roleID2;...] or $hasAnyRole[userID;roleID1;roleID2;...]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Admin">
        !!exec $onlyIf[$hasAnyRole[$authorID;Admin]==true;You are not admin]<br>You are admin!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are admin!
        </discord-message>
</discord-messages>

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Normal User">
        !!exec $onlyIf[$hasAnyRole[$authorID;Admin]==true;You are not admin]<br>You are admin!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are not admin
        </discord-message>
</discord-messages>