# $concatTextSplit
adds an array to the end of an array from `$textsplit`

#### Usage: `$concatTextSplit[text;separator(optional, default = ,)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Rake Mido; ] {{ '\n' }} $concatTextSplit[Wiki,Mika;,] {{ '\n' }} $arrayJoin[ ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Rake Mido Wiki Mika
	</discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$arrayConcat](./../Array/arrayConcat.md) instead 
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="concat" vertical="middle" /> <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="merge " vertical="middle" /> <Badge type="tip" text="add" vertical="middle" />