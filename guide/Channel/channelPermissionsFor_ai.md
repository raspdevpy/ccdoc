# $channelPermissionsFor

This function retrieves the permissions a specific user or role has within a given channel. It returns a comma-separated list of those permissions.

## Usage

```bash
$channelPermissionsFor[userID/roleID]
$channelPermissionsFor[channelID;userID/roleID]
```

**Arguments:**

*   `userID/roleID`: (Required) The ID of the user or role whose permissions you want to retrieve.
*   `channelID`: (Optional) The ID of the channel to check permissions in. If omitted, the current channel where the command is executed will be used.

**Breakdown:**

*   **`$channelPermissionsFor[userID/roleID]`**: This will return the permissions of the specified user or role within the channel the command is being executed in.
*   **`$channelPermissionsFor[channelID;userID/roleID]`**:  This allows you to specify a different channel to check permissions in using its `channelID`. This is useful for checking permissions in other channels without being directly in that channel.

## Example

Here's an example demonstrating how to use `$channelPermissionsFor`:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $channelPermissionsFor[$channelID;$authorID]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Create Instant Invite, Kick Members, Ban Members, Administrator, Manage Channels, Manage Guild, Add Reactions, View Audit Log, Priority Speaker, Stream, View Channel, Send Messages, Send Tts Messages, Manage Messages, Embed Links, Attach Files, Read Message History, Mention Everyone, Use External Emojis, View Guild Insights, Connect, Speak, Mute Members, Deafen Members, Move Members, Use Vad, Change Nickname, Manage Nicknames, Manage Roles, Manage Webhooks, Manage Emojis And Stickers, Use Application Commands, Request To Speak, Manage Events, Manage Threads, Use Public Threads, Create Public Threads, Use Private Threads, Create Private Threads, Use External Stickers, Send Messages In Threads, Start Embedded Activities, Moderate Members
  </discord-message>
</discord-messages>

In this example, the command `!!exec $channelPermissionsFor[$channelID;$authorID]` retrieves and displays the permissions of the command author (`$authorID`) within the current channel (`$channelID`). The bot then responds with a comma-separated list of the user's permissions in that channel.