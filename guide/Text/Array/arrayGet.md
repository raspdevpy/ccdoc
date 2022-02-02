# $arrayGet
returns the value by index of the split text from `$textsplit`

#### Usage: `$arrayGet[index]`
> returns the value by index or undefined if not found
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[17,19,15,30,40] {{ '\n' }} Your age is $arrayGet[4].
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Your age is 40.
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" />