# $channelUsed
Return the ID of the channel used. If no channel ID is specified, set it to the current channel.

#### Usage: `$channelUsed[channelID (optional)]`
<br/>
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


::: tip Related Functions
[$channelID](../Channel/channelID.md) will return the channelID where the command was executed.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="execChannel" vertical="middle" /> <Badge type="tip" text="channelUsed" vertical="middle" /> <Badge type="tip" text="command channel" vertical="middle" />