# $mention

Returns mention of the User that triggered the command.

#### Usage: 
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="User">
		!!exec $mention
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordMention :highlight="true">User</DiscordMention>
	</discord-message>
</discord-messages>


::: tip Related Functions
[$authorID](../Member/authorID.md), to return the ID of the executor of the command
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="ping" vertical="middle" /> <Badge type="tip" text="ping (ennoying)" vertical="middle" /> <Badge type="tip" text="mention" vertical="middle" /> <Badge type="tip" text="author" vertical="middle" /> 