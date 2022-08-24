# $editTextSplitElement
adds an element to an array from `$textsplit` or replaces the value by index of the split text from `$textsplit`

#### Usage: `$editTextSplitElement[index;new value]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Wiki Rake; ] {{ '\n' }} $editTextSplitElement[1;Mido] {{ '\n' }} $arrayJoin[ ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Mido Rake
	</discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$arraySet](./../Array/arraySet.md) instead 
:::
##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="element" vertical="middle" />