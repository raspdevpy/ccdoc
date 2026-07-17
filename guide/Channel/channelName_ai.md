# $channelName

Retrieves the name of a Discord channel.

#### Usage: `$channelName[channelID]`

`<channelID>` (Required): The ID of the channel you want to get the name of.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelName[123456789012345678]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		The channel's name is... (Assuming the channel ID 123456789012345678 is a channel named "help")
	</discord-message>
</discord-messages>

::: tip Important Notes
*   If a channel with the specified ID is not found, the function will return an empty string.
*   Make sure your bot has the necessary permissions to access the channel.
:::

::: tip Getting the Channel ID
Use [$channelID](../Channel/channelID.md) to get the ID of a channel by its name or to get the ID of the channel where the command was executed.
:::

::: tip Related Functions
Use [$findChannel](../Channel/findChannel.md) to find a channel using its name.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="name channel" vertical="middle" /> <Badge type="tip" text="channel name" vertical="middle" />