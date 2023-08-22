# Channel/User/Role Permissions
Some functions needs a permissions names
like `$modifyChannelPerms, $modifyRolePerms...`

### Permissions:
```
admin: Administrator
manageserver: Manage Server
kick: Kick User
ban: Ban User
manageroles: Manage Roles
managechannels: Manage Channels
managewebhooks: Manage Webhooks
managemessages: Manage Messages
viewauditlog: View audit log
managenicknames: Manage nicknames
sendmessages: Send message 
readmessages: Read message history
movemembers: Move Members from Voice Channel to another
manageemojis: Manage Emojis
viewguildinsights: View Guild Insights for communities
mentioneveryone: Ability to mention @everyone 
embedlinks: Display Embed Links
viewchannel: View a channel
createinvite: Ability to create an invite
mutemembers: Mute User
speak: Ability to speak in voice channel
deafenmembers: Able to deafen jusers
attachfiles: Ability to attach files in message
connect: Allows for joining of a voice channel
addreactions: Ability to add new reaction to a message
speakpriority: Speak priority inside a voice channel
ttsmessage: Send TTS message
externalemoji: Ability to use emojis outside the server   
vad: Allows for using voice-activity-detection in a voice channel
changenickname: Ability to change his own nickname 
slashcommand: Ability to use slash and applications commands
speakrequest: Ability to request a speak inside stage channels 
managethreads: Allows for deleting and archiving threads, and viewing all private threads
publicthreads: Ability to create public threads
privatethreads: Ability to create private threads
externalstickers: Ability to use stickers from outside the server
canstream: Allows the user to go live,
manageevents: Allows for creating, editing, and deleting scheduled events
createpublicthreads: Allows for creating public and announcement threads
createprivatethreads: Allows for creating private threads
sendmessagesinthreads: Allows for sending messages in threads
embeddedactivities: Allows for using Activities
moderatemembers: Allows for timing out users
```

### Example
`$modifyChannelPerms[$channelID;-sendmessages;$roleID[muted]]`

to deny send messages access of a certian role
###### Tags: <Badge type="tip" text="Permissions" vertical="middle" />
