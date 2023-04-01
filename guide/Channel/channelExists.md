# $channelExists
Returns true or false, based on whether or not a channelID exists.

#### Usage: 
`$channelExists[channelID]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channelExists[889102524727058463]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>


::: tip Used Functions
Use [$channelID](../Channel/channelID.md) to get the ID of a channel using its name.
:::

::: tip Related Functions
Use [$findChannel](../Channel/findChannel.md) to find a channel using its name.
:::

##### Function Difficultyy: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server channel" vertical="middle" /> 