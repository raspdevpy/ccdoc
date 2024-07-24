# $memberJoinedCode

retrieve the invite code, which the user join from

## Usage

```bash
$memberJoinedCode[User ID;Info Type (default code)]
```

### Info Type:

### Accepted ones are:
* `code`: return the invite code if exists, like Zbhzxf
* `code_url`: return the invite url if exists, like `https://discord.gg/Zbhzxf`
* `type`: return the invite type, one of these values (bot-invite, integration, discovery, student-hub, invite-link, invite-link-custom, manual-verification, unknown)
* `inviter`: return the inviter id if exists

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec You were invited by $memberJoinedCode[$userID;inviter]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You were invited by 123456789987654
        </discord-message>
</discord-messages>