# $blackListIDs

Blacklist users from using this command by using their IDs.

## Usage

```bash
$blackListIDs[userID;userID;...;error message]
```

### Example (blacklisted user):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]<br>Hello there!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are blacklisted from using this command!<br><br>
        </discord-message>
</discord-messages>

### Example (unblacklisted user):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]<br>Hello there!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello there!
        </discord-message>
</discord-messages>