# $findMember
Searches for a member, by: nickname/ID/mention/username/username#dicriminator

#### Usage: 
`$findMember[nickname/ID/mention/username/username#dicriminator;returnCurrentUser (yes/no) (optional)]`

If member is found:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findMember[Member#0000;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

If member is not found:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findMember[user;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>


::: danger Warning
This data comes from the cache, not the api, therefore it may not be precise unless all the guild members are cached (which only in tier 5).
:::

::: tip Related Functions
[$authorID](../Member/authorID.md), to get the ID from the author of the command

[$userID](../Member/userID.md), to return a user ID from a given username
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="find member" vertical="middle" /> <Badge type="tip" text="find user" vertical="middle" /> <Badge type="tip" text="search Member" vertical="middle" /> <Badge type="tip" text="search User" vertical="middle" /> 