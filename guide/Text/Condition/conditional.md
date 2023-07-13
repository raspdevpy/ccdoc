# $conditional

return A if condition is true, B if condition is false

## Usage

```bash
$conditional[condition;A;B]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $conditional[$username==Mido;You are Mido;You are Rake]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are Mido<br><br>
        </discord-message>
</discord-messages>

### Output (if Rake run the command):
You are Rake