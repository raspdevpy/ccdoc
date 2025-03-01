# Understanding Channel, User, and Role Permissions

Several bot functions, such as `$modifyChannelPerms` and `$modifyRolePerms`, require you to specify permission names. This page provides a comprehensive list of these permission names and their descriptions.

### Available Permissions:

Here's a breakdown of the permissions you can use:

*   **admin:** Administrator (Grants all permissions)
*   **manageserver:** Manage Server (Modify server settings)
*   **kick:** Kick User (Remove members from the server)
*   **ban:** Ban User (Permanently remove members from the server)
*   **manageroles:** Manage Roles (Create, edit, and delete roles)
*   **managechannels:** Manage Channels (Create, edit, and delete channels)
*   **managewebhooks:** Manage Webhooks (Create, edit, and delete webhooks)
*   **managemessages:** Manage Messages (Delete messages, pin messages)
*   **viewauditlog:** View Audit Log (See server activity logs)
*   **managenicknames:** Manage Nicknames (Change member nicknames)
*   **sendmessages:** Send Messages (Send text messages in channels)
*   **readmessages:** Read Message History (View past messages in channels)
*   **movemembers:** Move Members (Move users between voice channels)
*   **manageemojis:** Manage Emojis (Create, edit, and delete emojis)
*   **viewguildinsights:** View Guild Insights (Access community analytics)
*   **mentioneveryone:** Mention Everyone (@everyone and @here)
*   **embedlinks:** Embed Links (Post links with rich previews)
*   **viewchannel:** View Channel (See the channel. If set to `false`, the user cannot see the channel)
*   **createinvite:** Create Invite (Generate invite links to the server)
*   **mutemembers:** Mute Members (Silence users in voice channels)
*   **speak:** Speak (Speak in voice channels)
*   **deafenmembers:** Deafen Members (Prevent users from hearing in voice channels)
*   **attachfiles:** Attach Files (Upload files to channels)
*   **connect:** Connect (Join voice channels)
*   **addreactions:** Add Reactions (Add reactions to messages)
*   **speakpriority:** Speak Priority (Speak uninterrupted in voice channels)
*   **ttsmessage:** Send TTS Message (Send text-to-speech messages)
*   **externalemoji:** Use External Emojis (Use emojis from other servers)
*   **vad:** Voice Activity Detection (Use voice activity detection in voice channels)
*   **changenickname:** Change Nickname (Change own nickname)
*   **slashcommand:** Use Slash Commands (Use application commands)
*   **speakrequest:** Request to Speak (Request to speak in stage channels)
*   **managethreads:** Manage Threads (Delete, archive threads, view all private threads)
*   **publicthreads:** Create Public Threads (Create public forum and announcement threads)
*   **privatethreads:** Create Private Threads (Create private threads)
*   **externalstickers:** Use External Stickers (Use stickers from other servers)
*   **canstream:** Go Live (Stream video in voice channels)
*   **manageevents:** Manage Events (Create, edit, and delete scheduled events)
*   **createpublicthreads:** Create Public and Announcement Threads
*   **createprivatethreads:** Create Private Threads
*   **sendmessagesinthreads:** Send Messages in Threads (Send messages within threads)
*   **embeddedactivities:** Use Activities (Use Discord Activities)
*   **moderatemembers:** Moderate Members (Timeout Users)

### Example: Denying Send Messages Permission

This example demonstrates how to use `$modifyChannelPerms` to deny the "send messages" permission for a role with the ID `muted` in a specific channel.

```
$modifyChannelPerms[$channelID;-sendmessages;$roleID[muted]]
```

In this example:

*   `$channelID` is the ID of the channel you want to modify permissions in.
*   `-sendmessages` denies the "sendmessages" permission. Using a `+` would grant the permission instead.
*   `$roleID[muted]` specifies the role ID of the "muted" role.
