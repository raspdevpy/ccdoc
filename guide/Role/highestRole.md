# $highestRole
returns the user's highest role in this guild from the provided id or executor

#### Usage: 
`$highestRole[userid]` or `$highestRole`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleID[$highestRole]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Admin
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="get highest position" vertical="middle" /> <Badge type="tip" text="position" vertical="middle" />