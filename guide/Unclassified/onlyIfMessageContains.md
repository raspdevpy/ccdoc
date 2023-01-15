# $onlyIfMessageContains

Continues the execution only if 'text' contains all provided words, returns the `error message` parameter if it does not.

## Usage

```bash
$onlyIfMessageContains[text;word1;word2;...;error message]
```

## Example
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $onlyIfMessageContains[$username[$authorID];mem;My username doesn't contain `mem`] My username contains `mem`!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        My username contains `mem`<br><br>
        </discord-message>
</discord-messages>