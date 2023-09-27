# $userConnectedVC

return the voice channel ID of the voice channel to which the user is currently connected

## Usage

```bash
$userConnectedVC[User ID (default is $authorID)]
```

### In case of no connected:
the function will return `undefined`

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $userConnectedVC[$authorID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        951224449250779199
        </discord-message>
</discord-messages>