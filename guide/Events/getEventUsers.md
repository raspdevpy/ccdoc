# $getEventUsers

to get the users interested in an event

## Usage

```bash
$getEventUsers[event id;separator (default is ', ')]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getEventUsers[123456789123456789]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        123456789, 987654321
        </discord-message>
</discord-messages>