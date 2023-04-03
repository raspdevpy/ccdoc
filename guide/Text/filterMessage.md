# $filterMessage

Removes letters or numbers from given text

## Usage

```bash
$filterMessage[message;letterOrSymbols]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $filterMessage[Hello World;lo]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        He Wrd
        </discord-message>
</discord-messages>