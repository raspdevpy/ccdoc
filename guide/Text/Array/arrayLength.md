# $arrayLength
returns the length of an array from `$textsplit`

#### Usage: `$arrayLength`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[A,B,C,D,E;,] {{ '\n' }} $arraylength
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		5
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="length" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" />