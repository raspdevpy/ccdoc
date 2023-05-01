# $getChannelMessages

Returns the most recent channel messages.

## Usage
```bash
$getChannelMessages[Channel ID;userID or everyone (default is everyone);ids/contents;separator;amount (max 50);reverse (yes/no, default is no)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getChannelMessages[$channelID;$authorID;everyone;ids;/;2]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        982807194485555300/982807196318457918
        </discord-message>
</discord-messages>