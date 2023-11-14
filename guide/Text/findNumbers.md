# $findNumbers

Takes every number from given string and returns them alone

## Usage

```bash
$findNumbers[string;separator]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $findNumbers[My age is 99 years old, and located 15 miles away from nearest station.;, ]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        99, 15
        </discord-message>
</discord-messages>