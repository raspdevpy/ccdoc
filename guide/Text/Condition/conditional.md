# $conditional

return A if condition is true, B if condition is false

## Usage

```bash
$conditional[condition;A;B]
```

### Example (if user is Mido):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Mido">
        !!exec $conditional[$username==Mido;You are Mido;You are Rake]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are Mido<br><br>
        </discord-message>
</discord-messages>

### Example (if user is Rake):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Rake">
        !!exec $conditional[$username==Mido;You are Mido;You are Rake]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are Rake<br><br>
        </discord-message>
</discord-messages>
