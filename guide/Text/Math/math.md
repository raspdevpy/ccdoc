# $math
Calculates numbers with any mathematically correct 
quantifier(s) in between.

#### Usage: `$math[10*(2+5)/7*8-2]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $math[10*(2+5)/7*8]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		a78
	</discord-message>
</discord-messages>

:::tip Alternatives
[$sum](./sum.md), can be used to sum up arguments.

[$sub](./sub.md), can be used to subtract arguments.

[$multi](./multi.md), can be used to multiply arguments.

[$divide](./divide.md), can be used to divide arguments.
:::

:::details Valid Quantifiers
`+` to sum up 2 numbers

`-` to subtract 2 numbers

`*` to multipy 2 numbers

`/` to divide 2 numbers

`**` to ^ 2 numbers

`()` to calculate everything in between, before anything else
:::


##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Maths" vertical="middle" /> <Badge type="tip" text="Calculate" vertical="middle" />