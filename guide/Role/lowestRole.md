# $lowestRole
returns the user's lowest role in this guild from the provided id or executor

#### Usage: 
`$lowestRole[userid]` or `$lowestRole`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleID[$lowestRole]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="get lowest position" vertical="middle" /> <Badge type="tip" text="position" vertical="middle" />