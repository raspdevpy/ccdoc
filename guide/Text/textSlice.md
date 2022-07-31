# $textSlice

Returns \<text\> after given position or text in between X and Y

## Usage

```bash
$textSlice[text;x;y (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSlice[Hello world;0;5]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello
        </discord-message>
</discord-messages>