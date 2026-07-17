# $randomMention
Returns a random Mention id from a Mention in the server

#### Usage: 
`$randomMention`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $randomMention
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		@Lisa
	</discord-message>
</discord-messages>

::: danger Warning
This members comes from the cache, so it picks random member from the cached members, unless all the guild members are cached (which only in tier 5).
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random Mention" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="return random Mention" vertical="middle" />