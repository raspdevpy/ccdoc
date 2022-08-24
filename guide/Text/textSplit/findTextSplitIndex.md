# $findTextSplitIndex
returns the index of the first occurrence of a value in an array from `$textsplit`

#### Usage: `$findTextSplitIndex[value]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Rake Wiki Mika Mido; ] {{ '\n' }} $findTextSplitIndex[Wiki]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2
	</discord-message>
</discord-messages>

::: danger
This function got deprecated, use [$arraySearch](./../Array/arraySearch.md) instead 
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="array" vertical="middle" /> <Badge type="find" text="textsplit" vertical="middle" /> <Badge type="tip" text="index" vertical="middle" />