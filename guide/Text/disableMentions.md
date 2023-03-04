# $disableMentions
will not ping a user even though mentioned

#### Usage: `$disableMentions`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $disableMentions <DiscordMention :highlight="true">Member</DiscordMention>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		@Member
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Do not ping" vertical="middle" /> <Badge type="tip" text="Mention" vertical="middle" /> <Badge type="tip" text="Ping" vertical="middle" /> <Badge type="tip" text="Annoying" vertical="middle" />
