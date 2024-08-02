# $usersWithRole

Returns a list of users with given role (members are given from the cache.)

## Usage

```bash
$usersWithRole[roleID;separator (optional, default new line);id/username/tag/mention (optional, default tag)]
```

### Example (Get users with member roles):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $usersWithRole[Members;, ;username]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido, Rake, Azz<br><br>
        </discord-message>
</discord-messages>

### Example (Get users with no role):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec users with no roles: $usersWithRole[;, ;tag]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        LonelyWolf#1234, Stranger#5678
        </discord-message>
</discord-messages>


::: danger Warning
This data comes from the cache, not the api, therefore it may not be precise unless all the guild members are cached (which only in tier 5).
:::
