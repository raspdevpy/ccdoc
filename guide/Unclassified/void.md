# $void

A function that eats input but return nothing!

## Usage

```bash
$void[ANYTHING]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $let[name;Mido]<br>My name is $void[$get[name]]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        My name is
        </discord-message>
</discord-messages>