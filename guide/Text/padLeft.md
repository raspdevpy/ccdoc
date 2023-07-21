# $padLeft

Adds a filling text at the start of text, depend on the maximum length

## Usage

```bash
$padLeft[Text;Max Length;Filling Text]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $padLeft[5;2;0]<br>$padLeft[13;2;0]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        05<br>13
        </discord-message>
</discord-messages>