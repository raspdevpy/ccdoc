# $isConnected

To check whether user is connected to voice channel or not (only cached users)

## Usage

```bash
$isConnected[User ID]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Is $username Connected To Channel?: $isConnected<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Is Mido Connected To Channel?: true
        </discord-message>
</discord-messages>