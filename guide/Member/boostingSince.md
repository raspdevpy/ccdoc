# $boostingSince

Returns data when given user started boosting this server.

## Usage

```bash
$boostingSince or $boostingSince[userID;date/ms (optional)]
```

### Example
<discord-messages>
          <discord-message :bot="false" role-color="#BF40BF" author="Booster">
        !!exec $boostingSince[$authorID;ms]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1726496877047<br><br>
        </discord-message>
</discord-messages>
