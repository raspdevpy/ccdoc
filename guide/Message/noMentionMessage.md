# $noMentionMessage
Returns the message, send by the command executor, without mentions. Useful to prevent the bot from accidentally pinging the members role

#### Usage: `$noMentionMessage`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec <DiscordMention :highlight="true">Server Moderator</DiscordMention> testing [$noMentionMessage] ($message)
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<DiscordMention :highlight="true">Server Moderator</DiscordMention> [testing] (<DiscordMention :highlight="true">Server Moderator</DiscordMention> testing)
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="mentions" vertical="middle" /> <Badge type="tip" text="disable mentions" vertical="middle" /> <Badge type="tip" text="ping" vertical="middle" />