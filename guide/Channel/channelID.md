# $channelID
Return the ID of the channel the command is executed in, or provides the ID when the name is provided.

#### Usage: `$channelID[channel name (optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		839090554205241394
	</discord-message>
</discord-messages>


::: warning
This function will not work with the voice channel join/leave trigger.
Instead, use [$voiceChannelID](../Channel/voiceChannelID.md).

This function will not work with the channel creation/deletion trigger.
Instead, use [$eventChannelID](../Channel/eventChannelID.md).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="command channel" vertical="middle" />