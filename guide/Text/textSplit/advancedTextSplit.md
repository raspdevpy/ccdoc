# $advancedTextSplit
The first field is the message we want to split and get indexes for. The second
field would be the split/seperator used in the text, and the next field would get the value of the index provided, setting this index value as the new text. The next
fields work as splitters/seperators and new indexes for this new text.


#### Usage: `$advancedTextSplit[text;split;index;split;index;...]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $advancedTextSplit[Wow, what a nice day, i'll go outside;,;2] /* Will get the second index */
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		what a nice day
	</discord-message>
</discord-messages>
::: warning This function is only for EXPERTS
:::

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="advanced" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" />
