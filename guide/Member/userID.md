# $userID
Returns a user ID by a given username.

#### Usage: `$userID[name]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userID[Mika]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		787695068306866198
	</discord-message>
</discord-messages>

::: danger Warning
This data comes from the cache, not the api, therefore it may not be precise unless all the guild members are cached (which only in tier 5).
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="userID" vertical="middle" /> <Badge type="tip" text="member's ID" vertical="middle" /> <Badge type="tip" text="User ID" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" />