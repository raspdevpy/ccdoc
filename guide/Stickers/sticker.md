# $sticker

To return an information about a sticker using ID\
**Info** can be: name,desc,url,tags,time

## Usage

```bash
$sticker[Sticker ID;name;Info]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $sticker[992974663099629588;name]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Smiley
        </discord-message>
</discord-messages>