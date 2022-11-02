# $getCommandOption
returns the value of a slash command option.

#### Usage: `$getCommandOption[type;Option Name]`

## Valid Option Name
`string, number, boolean, channel, role, mentionable, user`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		/* Code must be in your slash command*/
        $getCommandOption[string;optionname]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Mido
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="slash" vertical="middle" /> <Badge type="tip" text="option" vertical="middle" />