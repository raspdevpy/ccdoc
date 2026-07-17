# $spliceTextJoin
Splits a text with `separator1`, then joins with it `separator2` every `x` times, and then joins with `separator3` every `x-1` times.

#### Usage: `$spliceTextJoin[text;separator1;separator2;separator3;every]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $spliceTextJoin[1 2 3 4 5 6 7; ;+;-;2]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1+2-3+4-5+6
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="splice" vertical="middle" />
