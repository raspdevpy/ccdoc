# $channelName
Return the name of a channel.

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


::: tip Used Funcitons
[$channelID](../Channel/channelID.md), to get the ID of a channel by name or the channel the command is executed in
:::

::: tip Related Functions
[$findChannel](../Channel/findChannel.md), to find a channel per name
:::



##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="name channel" vertical="middle" /> <Badge type="tip" text="channel name" vertical="middle" />