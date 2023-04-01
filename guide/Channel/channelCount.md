# $channelCount
Returns the amount of channels that are in the server.

#### Usage: `$channelCount[Type (optional)]`

`Type` can be a type from this [list.](../CodeReferences/ref.channel_types.md)

#### Example

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