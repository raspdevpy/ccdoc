# $memberSearch

Search for members with username or nickname in the server and get their information

## Usage

```bash
$memberSearch[username/nickname;amount to return (Default is 1);separator (Default is ,);info to return (Default is id)]
```

### Info To Return:
By default it is `id`, but you can pick from:

* `id`: to return the found user id\
* `username`: to return the found user's username\
* `nickname`: to return the found user's nickname in the server\
* `name`: to return the found user's display name in the server
> You can also use combination of them, like `name (id)` to be replaced with `Mido (12345678901234567)`

> You can know more information about the user with the use of `$user`

### Amount to Return:
It determines how many users it will return if they match the query, by default it is 1
> When multiple user returned, they will merged together with the `separator`

### Example (Search and member is found):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $memberSearch[mido.dev]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        788361834360864808<br><br>
        </discord-message>
</discord-messages>

### Example (Search and multiple members are found):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $memberSearch[A;5;, ;name]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Alpha, Alight, A living legend, A story in life<br><br>
        </discord-message>
</discord-messages>

### Example (Search but member is not found):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $memberSearch[bad.dev]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <br>
        </discord-message>
</discord-messages>

### Example (Search and use the user id to retrieve join date):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $let[user_id;$memberSearch[mido.dev]]<br>Mido joined the server at: $memberJoinedDate[$user_id]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido joined the server at: Wed Mar 09 2022 22:06:21
        </discord-message>
</discord-messages>