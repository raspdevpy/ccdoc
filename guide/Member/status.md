# $status <Badge type="danger" text="Premium Only" vertical="middle" /> 
Returns the user's presence status.

#### Usage: `$status[userID]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $status[$authorID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Online
	</discord-message>
</discord-messages>

::: warning
Presence intent needs to be enabled on Discord Dev Portal!
:::

::: tip Used Functions
[$authorID](../Member/authorID.md), to return the ID from the executor of the command!
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="status" vertical="middle" /> <Badge type="tip" text="member status" vertical="middle" /> <Badge type="tip" text="online" vertical="middle" /> <Badge type="tip" text="offline" vertical="middle" /> <Badge type="dnd" text="userID" vertical="middle" />