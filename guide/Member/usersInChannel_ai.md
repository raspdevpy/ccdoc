# $usersInChannel

Retrieves a list of users present in a specified voice or text channel.

#### Usage:

`$usersInChannel[channelID;option;separator]`

#### Parameters:

*   `channelID`:  The ID of the channel you want to retrieve the users from.  Use `$channelID` for the current channel.
*   `option` (Optional):  Determines what information about each user to return.  Accepts the following values:
    *   `id`: Returns the user's ID.
    *   `mention`: Returns the user's mention.
    *   `username`: Returns the user's username.
    *   `count`: Returns the number of users in the channel (ignores `separator`).
    *   If omitted, defaults to returning the user's mention.
*   `separator` (Optional):  The string used to separate the list of users. If omitted, no separator is used.

<br/>

#### Example:

```discord
!!exec $usersInChannel[$channelID;username;, ]
```

This command will return a comma-separated list of usernames of all users in the current channel.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $usersInChannel[$channelID;username;, ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 Tom, Ben, Custom Command
	</discord-message>
</discord-messages>

::: tip Related Functions
*   [$usersWithRole](../Member/usersWithRole.md):  Get a list of users with a specific role.
:::

::: danger Warning
The data for this function is pulled from the bot's cache. This means the information may not be completely up-to-date if guild members are not fully cached. Full caching is typically achieved at tier 5 bot verification.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="InChannel" vertical="middle" />