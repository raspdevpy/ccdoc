# $userRoleColor
returns the hex color of the highest role of the user

#### Usage: `$userRoleColor` or `$userRoleColor[userID]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userRoleColor
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 #fff00
	</discord-message>
</discord-messages>

::: tip Member must be cached!
If you use the main bot the member must be cached to get valid results.You can ignore the message,if you use custom bot!
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="color" vertical="middle" /> 
