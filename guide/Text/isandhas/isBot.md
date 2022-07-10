# $isbot
checks if the user is a bot or not ,returns true or false

#### Usage: `$isbot` or `$isbot[userid]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $isbot | $isbot[891210194925809695]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		false | true
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags:
<Badge type="tip" text="is" vertical="middle" /> 
<Badge type="tip" text="bot" vertical="middle" /> 