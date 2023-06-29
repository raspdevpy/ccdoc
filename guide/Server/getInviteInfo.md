# $getInviteInfo

Gets invite info from given invite code

## Usage

```bash
$getInviteInfo[code/url;Property]
```

### Possible Properties:
maxUses, uses, channelID, guildID,serverid, servername, servericon, serversplash, serverdesc, memberscount, userID, isTemporary, expiresAt, createdAt,url

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getInviteInfo[ZFQNZA4Ekz;servername]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Custom Command
        </discord-message>
</discord-messages>