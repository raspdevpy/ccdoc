# $channelType
Returns the type of channel, from a channel ID.

#### Usage: `$channelType[channelID]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelType[$channelID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		text
	</discord-message>
</discord-messages>

::: tip Note
This function returns a type of channel from this [list.](../CodeReferences/ref.channel_types.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="channel type" vertical="middle" />