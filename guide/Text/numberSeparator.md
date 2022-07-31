# $numberSeparator

Separates a number in thousands

## Usage

```bash
$numberSeparator[number;separator (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your number is $numberSeparator[3352311]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your number is 3,352,311
        </discord-message>
</discord-messages>