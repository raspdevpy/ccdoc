# $channelPermissionsFor

Returns the permissions for this user/role in a channel

## Usage

```bash
$channelPermissionsFor[userID/role id] or $channelPermissionsFor[channelID;userID/role id]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $channelPermissionsFor[$channelID;$authorID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Create Instant Invite, Kick Members, Ban Members, Administrator, Manage Channels, Manage Guild, Add Reactions, View Audit Log, Priority Speaker, Stream, View Channel, Send Messages, Send Tts Messages, Manage Messages, Embed Links, Attach Files, Read Message History, Mention Everyone, Use External Emojis, View Guild Insights, Connect, Speak, Mute Members, Deafen Members, Move Members, Use Vad, Change Nickname, Manage Nicknames, Manage Roles, Manage Webhooks, Manage Emojis And Stickers, Use Application Commands, Request To Speak, Manage Events, Manage Threads, Use Public Threads, Create Public Threads, Use Private Threads, Create Private Threads, Use External Stickers, Send Messages In Threads, Start Embedded Activities, Moderate Members
        </discord-message>
</discord-messages>