# $latestMessage

Return the latest message content/id in a channel, uses the cache

## Usage

```bash
$latestMessage[Channel ID (default is $channelID);User ID (default everyone);Return Message ID instead (yes/no, default no)]
```

### Example 1 (Return Latest Content):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $latestMessage[$channelID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello World<br><br>
        </discord-message>
</discord-messages>

### Example 2 (Return Latest ID):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $latestMessage[$channelID;everyone;yes]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1234567890
        </discord-message>
</discord-messages>