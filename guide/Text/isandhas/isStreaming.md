# $isStreaming

To check whether user is streaming in a voice channel or not (only cached users)

## Usage

```bash
$isStreaming[User ID]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Is $username Streaming?: $isStreaming<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Is Mido Streaming?: false
        </discord-message>
</discord-messages>