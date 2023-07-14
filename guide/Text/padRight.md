# $padRight

Adds a filling text at the end of text, depend on the maximum length

## Usage

```bash
$padRight[Text;Max Length;Filling Text]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $padRight[I like custom commands;25;.]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        I like custom commands...
        </discord-message>
</discord-messages>