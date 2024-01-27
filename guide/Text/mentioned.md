# $mentioned

Returns the ID of the mentioned user

## Usage

```bash
$mentioned[mention number or all;return author ID (yes/no)(optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec First mention is $mentioned[1]<br>All mentions are: $mentioned[all]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        First mention is 788361834360864808<br>All mentions are: 788361834360864808, 840526017260945468
        </discord-message>
</discord-messages>