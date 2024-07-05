# $getEmbed

Gets information of an embed

## Usage

```bash
$getEmbed[Channel ID (optional);Message ID (optional);Info (optional, default is description);Embed Number (optional, default is 1)]
```

## Info values
title, footer, footer_image, author, author_url, author_image, color, color_hex, description, field, field_value, field_inline, thumbnail, timestamp

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getEmbed[$channelID;$messageID;description]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This was an embed description
        </discord-message>
</discord-messages>
