# $usersWithRole
returns users,which have the users role

#### Usage: 
`$usersWithRole[roleID;separator (optional, default space);id/username/tag/mention (optional, default tag)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $usersWithRole[$roleID[member];,;username]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 Tom,Lisa,Ben
	</discord-message>
</discord-messages>

::: tip Related Functions
[$hassWithRole](../Member/hasWithRole.md), to check if the user has sWithRole
:::

::: info Member must be cached!
If you use the main bot the member must be cached to get valid results.You can ignore the message,if you use custom bot!
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="WithRole" vertical="middle" /> 