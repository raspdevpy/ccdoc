# `$channel`

Retrieves information about a specific channel.

#### Usage:

`$channel[Channel ID;Option]`

#### Parameters:

*   **Channel ID:** The ID of the channel you want to get information from.
*   **Option:**  The specific piece of information you want to retrieve about the channel. See the list below for available options.

#### Available Options:

The `Option` parameter determines what information `$channel` returns. Here's a breakdown of the available options:

*   `name`: The name of the channel.
*   `id`: The ID of the channel.
*   `isdeleted`: Returns `true` if the channel is deleted, otherwise `false`.
*   `mention`:  Returns the channel mention (e.g., `<#1234567890>`).
*   `position`: The channel's position in the channel list (numerical).
*   `rawposition`:  The raw position of the channel, unaffected by sorting.
*   `topic`: The channel topic (if applicable, e.g., for text channels).
*   `type`: The type of channel (See Note below).
*   `created`: The timestamp of when the channel was created (Unix timestamp).
*   `timestamp`:  Alias for `created`. Returns the timestamp when the channel was created (Unix timestamp).
*   `guildid`: The ID of the guild (server) the channel belongs to.
*   `guildname`: The name of the guild (server) the channel belongs to.
*   `ismanageable`: Returns `true` if the bot can manage the channel, otherwise `false`.
*   `parentid`: The ID of the parent category (if applicable).
*   `parentname`: The name of the parent category (if applicable).
*   `isviewable`: Returns `true` if the bot can view the channel, otherwise `false`.
*   `isdeletable`: Returns `true` if the bot can delete the channel, otherwise `false`.

#### Example:

This example retrieves the name of the channel with the ID stored in the variable `$channelID`.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec #$channel[$channelID;name]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		#custom-command-is-the-best
	</discord-message>
</discord-messages>

::: tip Note
The `type` option returns the channel's type.  Refer to this [list](../CodeReferences/ref.channel_types.md) for possible channel types.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="information" vertical="middle" />