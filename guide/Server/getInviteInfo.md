# $getInviteInfo

Gets invite info from given invite code

## Usage

```bash
$getInviteInfo[code/url;Property]
```

### Properties For All Invites:
guildid, serverid, servername, servericon, serversplash, serverdesc, memberscount, membersonlinecount, code, userid, expiresat, url, channelid, channelname

### Extra Properties For your server invites Only:
uses, maxuses, ownerid, istemporary, createdat

### Get all properties:
If you leave property empty, you will get a JSON with all the properties which you can get information with $objectCreate and $objectGet

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getInviteInfo[ZFQNZA4Ekz;servername]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Custom Command
        </discord-message>
</discord-messages>