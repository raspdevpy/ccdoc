# $guild

A versatile function packed with information about the current server!

### Usage: `$guild[property]`

This function allows you to retrieve various details about the server where the command is executed.  Simply specify the desired property within the square brackets.

#### Supported Properties:

*   `name` - The name of the server.
*   `id` - The unique ID of the server.
*   `acronym` - The acronym of the server's name.
*   `afkchannelid` - The ID of the server's AFK voice channel.
*   `boostcount` - The number of boosts the server has.
*   `boostlevel` - The server's boost level.
*   `created` - The date and time the server was created.
*   `description` - The server's description (if any).
*   `emojicount` - The total number of emojis in the server.
*   `ispartnered` - Returns `true` if the server is partnered, `false` otherwise.
*   `isverified` - Returns `true` if the server is verified, `false` otherwise.
*   `membercount` - The total number of members in the server.
*   `ruleschannel` - The ID of the server's rules channel.
*   `systemchannelid` - The ID of the server's system channel.
*   `timestamp` - The creation timestamp of the server.
*   `updateschannel` - The ID of the server's moderator news channel.
*   `verificationlvl` - The server's verification level.

<br/>

#### Example:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec This Server has $guild[boostcount] boosts!
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    This Server has 2 boosts!
  </discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />