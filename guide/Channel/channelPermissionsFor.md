# $channelPermissionsFor

Returns the permissions for a user/role in a channel.

## Usage

```bash
$channelPermissionsFor[userID/roleID] or $channelPermissionsFor[channelID;userID/roleID]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $channelPermissionsFor[$channelID;$authorID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Createinstantinvite, Kickmembers, Banmembers, Administrator, Managechannels, Manageguild, Addreactions, Viewauditlog, Priorityspeaker, Stream, Viewchannel, Sendmessages, Sendttsmessages, Managemessages, Embedlinks, Attachfiles, Readmessagehistory, Mentioneveryone, Useexternalemojis, Viewguildinsights, Connect, Speak, Mutemembers, Deafenmembers, Movemembers, Usevad, Changenickname, Managenicknames, Manageroles, Managewebhooks, Manageemojisandstickers, Manageguildexpressions, Useapplicationcommands, Requesttospeak, Manageevents, Managethreads, Createpublicthreads, Createprivatethreads, Useexternalstickers, Sendmessagesinthreads, Useembeddedactivities, Moderatemembers, Viewcreatormonetizationanalytics, Usesoundboard, Createguildexpressions, Createevents, Useexternalsounds, Sendvoicemessages, Sendpolls, Useexternalapps, Pinmessages
        </discord-message>
</discord-messages>
