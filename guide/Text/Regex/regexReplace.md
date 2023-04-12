# $regexReplace

Uses a regular expression to replace matching queries

## Usage

```bash
$regexReplace[text;regex;flags;new text]
```

### Example 1:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $regexReplace[My age is 900 years old.;\d+;g;[SECRET AGE]]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        My age is [SECRET AGE] years old.
        </discord-message>
</discord-messages>