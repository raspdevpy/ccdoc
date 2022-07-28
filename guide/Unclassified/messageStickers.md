# $messageStickers

To return the user message stickers (id)\
**Index**: starts with 1, leaving it empty return all stickers ids separated by `, `

## Usage

```bash
$messageStickers[Index]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $messageStickers[1]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
         992970796031017080
        </discord-message>
</discord-messages>