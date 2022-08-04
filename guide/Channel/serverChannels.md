# $serverChannels

Return all the channels inside the guild\
\
info can be: name, id

## Usage

```bash
$serverChannels[info (optional, default is name);type (optional, default is all);separator (optional, default is ", ")]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $serverChannels[name;text;/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        channel1/channel2/channel3/channel4
        </discord-message>
</discord-messages>