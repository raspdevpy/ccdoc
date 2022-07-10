# $seq
Returns a sequence of numbers, decided by a starting (inclusive) number and stop at ending (inclusive) number with step. 

#### Usage: 
`$seq[Start;End;Step (optional, default=1)]`

#### Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $seq[1;10]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        1 2 3 4 5 6 7 8 9 10
	</discord-message>
</discord-messages>

::: tip 
This can be used with [$forEach](../Useful/forEach) quite easily
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="sequence" vertical="middle" />  <Badge type="tip" text="Numbers list" vertical="middle" />  <Badge type="tip" text="return list" vertical="middle" />  <Badge type="tip" text="ForEach" vertical="middle" /> 