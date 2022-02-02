# $arraySet
adds an element to an array from `$textsplit` or replaces the value by index of the split text from `$textsplit`

#### Usage: `$arraySet[index;value]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[I Like CC; ] {{ '\n' }} $arraySet[2;Love] {{ '\n' }} $arrayJoin[ ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I Love CC
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="set" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" /><Badge type="edit" text="set" vertical="middle" />