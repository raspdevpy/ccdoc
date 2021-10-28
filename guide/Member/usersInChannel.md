# $usersInChannel
returns users in a voice channel or normal channel

#### Usage: 
`$usersInChannel[channelID;id/mention/username (optional);separator (optional)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $usersInChannel
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 Tom,Ben,Custom Command
	</discord-message>
</discord-messages>

::: tip Related Functions
[$hassInChannel](../Member/usersWithRoles.md), to check if the user has sInChannel
:::

::: info Member must be cached!
If you use the main bot the member must be cached to get valid results.You can ignore the message,if you use custom bot!
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="InChannel" vertical="middle" /> 