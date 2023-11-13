# $customEmoji

Returns a custom emoji

## Usage

```bash
$customEmoji[name or id]
```

### Example (Using Custom Emoji Name):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $customEmoji[yes]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/E174Ey0.png"><br></discord-embed>
        </discord-message>
</discord-messages>

### Example (Using Custom Emoji ID):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $customEmoji[833252579873259521]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/7t3gZNn.png"><br></discord-embed>
        </discord-message>
</discord-messages>