# $channelName
Returns the name of a channel.

#### Usage: `$channelName[channelID]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelName[$channelID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		「💁」・help
	</discord-message>
</discord-messages>


::: tip Used Functions
Use [$channelID](../Channel/channelID.md) to get the ID of a channel by name, or to get the channelID of which the command is executed in.
:::

::: tip Related Functions
Use [$findChannel](../Channel/findChannel.md), to find a channel using its name.
:::



##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="name channel" vertical="middle" /> <Badge type="tip" text="channel name" vertical="middle" />