# $ordinal
adds the correct suffix after the number
`st`,`nd`,`rd`,`th`

#### Usage: `$ordinal[number]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $ordinal[2]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		2nd
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="round" vertical="middle" /> <Badge type="tip" text="set" vertical="middle" /> <Badge type="tip" text="decimals" vertical="middle" /> <Badge type="tip" text="ordinal" vertical="middle" />