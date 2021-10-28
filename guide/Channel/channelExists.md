# $channelExists
Returns a boolean, to check if a channel exists

#### Usage: 
`$channelExists[channelID]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelExists[$channelID[「🤖」・bot-commands]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>


::: tip Used Funcitons
[$channelID](../Channel/channelID.md), to get the ID of a channel by name
:::

::: tip Related Functions
[$findChannel](../Channel/findChannel.md), to find a channel per name
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server channel" vertical="middle" /> 