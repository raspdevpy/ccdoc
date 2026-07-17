# $awaitMessage

Awaits a message from given user ID or everyone in this channel, and returns it's message id/content.

## Usage

```bash
$awaitMessage[MESSAGE (Optional);userid / everyone (optional, default everyone);timeout; return message id instead of content (yes/no)]
return the user reply or undefined
```
### Timeout
The maximum time the bot waits for a user to send a message.\
Accepts time in the format `10s` for example.\
The max time is `60 x (bot tier + 1)` seconds, for example for tier 3 it would be `240` seconds.

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your answer is: $awaitMessage[Are you tall?;$authorID]
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Are you tall?
        </discord-message>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        YES
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your answer is: YES
        </discord-message>
</discord-messages>
