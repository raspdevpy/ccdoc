# $awaitMessage

Awaits a message from given user ID or everyone in this channel, and return it

## Usage

```bash
$awaitMessage[MESSAGE (Optional);userid / everyone (optional, default everyone);timeout after (default and max:(60 x bot tier) seconds); return message id instead of content (yes/no)]
return the user reply or undefined
```

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