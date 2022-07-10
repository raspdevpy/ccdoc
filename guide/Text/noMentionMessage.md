# $noMentionMessage
User's message without any mentions. (members, roles & channels)

#### Usage: `$noMentionMessage`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec aaa <DiscordMention :highlight="true">Member</DiscordMention> $noMentionMessage
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		aaa
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Mentions" vertical="middle" /> <Badge type="tip" text="Disable Mentions" vertical="middle" />