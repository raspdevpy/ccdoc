# $userExists
Returns a boolean, to check if a user exists in the server.

#### Usage: 
`$userExists[userid]`


<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userExists[$authorID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>

::: danger Warning
This data comes from the cache, not the api, therefore it may not be precise unless all the guild members are cached (which only in tier 5).
:::

::: tip Related Functions
[$findMember](../Member/findMember.md), to find a member's ID
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Channel" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server channel" vertical="middle" /> 
