# $channelUsed

Returns the ID of the channel used. If no channel ID is specified, it defaults to the current channel where the command was executed.

#### Usage: `$channelUsed[channelID (optional)]`

**Parameters:**

*   `channelID (optional)`: The ID of the channel you want to be set as the channel used. If omitted, the function returns the ID of the channel where the command is run.

**Example:**

Here are a few examples showcasing the `$channelUsed` function:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelUsed[839090554205241394]
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelUsed
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		839090554205241394
	</discord-message>
</discord-messages>

In the first example, the bot set the specified channel ID `839090554205241394` as the channel used.  In the second example, because no channel ID is provided, the bot returns the channel ID where the `!!exec` command was executed.

::: tip Related Functions
*   `$channelID` returns the channel ID where the command was executed. See the [$channelID](../Channel/channelID.md) documentation for more information.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="command channel" vertical="middle" />