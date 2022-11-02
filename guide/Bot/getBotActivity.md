# $getBotActivity

get a custom bot activity

## Usage

```bash
$getBotActivity[information type]
```

# Information type can be `text` or `type`

### Example:
![](https://i.imgur.com/KyYqUGU.png)\
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getBotActivity[text]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        The Cosmos
        </discord-message>
</discord-messages>