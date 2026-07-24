# $getInviteInfo

Gets invite info from a given invite code.

## Usage

```bash
$getInviteInfo[code/url;Property]
```

**Parameters:**

*   `code/url`: The invite code or full invite URL to retrieve information from.
*   `Property`: The specific property you want to extract. Leave empty to get all properties in JSON format.

### Available Properties

These properties are available for **all** invites:

*   `guildid`, `serverid`: The ID of the server.
*   `servername`: The name of the server.
*   `servericon`: The URL of the server icon.
*   `serversplash`: The URL of the server splash image.
*   `serverdesc`: The description of the server.
*   `memberscount`: The total number of members in the server.
*   `membersonlinecount`: The number of members currently online in the server.
*   `code`: The invite code itself.
*   `userid`: The ID of the user who created the invite.
*   `expiresat`: The expiration date of the invite (if applicable).
*   `url`: The full invite URL.
*   `channelid`: The ID of the channel the invite is for.
*   `channelname`: The name of the channel the invite is for.

These properties are available **only for invites from the current server**:

*   `uses`: The number of times the invite has been used.
*   `maxuses`: The maximum number of times the invite can be used.
*   `ownerid`: The ID of the user who created the invite.
*   `istemporary`: Whether the invite is temporary (grants temporary membership).
*   `createdat`: The date and time the invite was created.

### Getting All Properties

If you leave the `Property` parameter empty (e.g., `$getInviteInfo[ZFQNZA4Ekz]`), the function will return a JSON string containing all available properties.  You can then parse this JSON using `$objectCreate` and `$objectGet` to access individual values. This is useful when you need to retrieve multiple pieces of information about an invite.

### Example

```discord
!!exec $getInviteInfo[ZFQNZA4Ekz;servername]
```

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $getInviteInfo[ZFQNZA4Ekz;servername]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Custom Command
  </discord-message>
</discord-messages>
