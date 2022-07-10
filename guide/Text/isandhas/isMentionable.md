# $isMentionable
Checks if the given id of role is Mentionable ,returns true or false 

#### Usage: `$isMentionable[roleid]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $isMentionable[$roleID[test]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		false
	</discord-message>
</discord-messages>

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags:
<Badge type="tip" text="is" vertical="middle" /> 
<Badge type="tip" text="Mentionable" vertical="middle" /> 