# `$channelCount`

This function returns the total number of channels present in the server.

#### Usage: `$channelCount[Channel Type (optional)]`

You can optionally specify a channel type to count only channels of that specific type. Refer to this [list](../CodeReferences/ref.channel_types.md) for valid channel types.

#### Parameters:

*   **`Channel Type` (optional):** The type of channel to count. If omitted, the function will count all channels.  Valid types can be found in the [Channel Types Reference](../CodeReferences/ref.channel_types.md).

#### Example:

Counts the number of public threads in the server:

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec There are $channelCount[threads_public] threads in the server!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		There are 13 threads in the server!
	</discord-message>
</discord-messages>

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="count" vertical="middle" /> <Badge type="tip" text="amount of channels" vertical="middle" /> <Badge type="tip" text="return number" vertical="middle" />