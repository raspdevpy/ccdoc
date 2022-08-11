# $guildEvents

to get the guild events\
\
info type can be : id/name\
filter can be: active,scheduled

## Usage

```bash
$guildEvents[info type;filter;separator (default is ', ')]
```

### Example (get the names of active events):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $guildEvents[name;active;/]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Event 1/Event 2
        </discord-message>
</discord-messages>