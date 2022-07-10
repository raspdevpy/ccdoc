# $arrayRemove
removes an element from an array from `$textsplit`

#### Usage: `$arrayRemove[Index;Index... (optional)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[I am Wiki, my favorite color is red, and im documenting new functions for you!;,] {{ '\n' }} $arrayRemove[2;3] {{ '\n' }} $arrayjoin[ ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I am Wiki
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="remove" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="delete" vertical="middle" />