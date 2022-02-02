# $arrayFilter
To filter an array depend on a value of CODE, if false then remove that element from the array
::: danger Currently bugged
Shows up "invalid usage of $textTrim" and sometimes $let instead of $textTrim
:::

#### Usage: `$arrayFilter[Element Value]{
CODE...
}`
::: warning Note
Only zero-cooldown functions allowed in CODE
:::
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Rake Wiki Mido; ] {{ '\n' }} $arrayFilter[name]{ $if[$name==Wiki]{false} } {{ '\n' }} $arrayjoin[ ]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Rake Mido /* removed Wiki */
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="filter" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" />