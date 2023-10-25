# $membersWithStatus

Forcible fetch members with those status, and return the ids separated by `,`

## Usage

```bash
$membersWithStatus[Status1;Status2...]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $membersWithStatus[online]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1xxxxxxxxxxxxxxxx2,3xxxxxxxxxxxx4
        </discord-message>
</discord-messages>