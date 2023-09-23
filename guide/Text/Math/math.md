# $math
Calculates numbers with any mathematically correct 
quantifier(s) in between.

#### Usage: `$math[10*(2+5)/7*8-2]`
e#### Usage: `$math[Expression;Name1=Value1;Name1=Value2]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $math[10*(2+5)/7*8-2]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		78
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Networth = $math[cash+bank;cash=100;bank=500]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Networth = 600
	</discord-message>
</discord-messages>


:::tip Alternatives
[$sum](./sum.md), can be used to sum up arguments.

[$sub](./sub.md), can be used to subtract arguments.

[$multi](./multi.md), can be used to multiply arguments.

[$divide](./divide.md), can be used to divide arguments.
:::

## Valid Quantifiers
Operator                 | Associativity | Description
:----------------------- | :------------ | :----------
(...)                    | None          | Grouping (brackets)
!                        | Left          | Factorial
^                        | Right         | Exponentiation
+, -, sqrt               | Right         | Unary prefix operators
\*, /, %                 | Left          | Multiplication, division, remainder
+, -                     | Left          | Addition, subtraction

:::warning Are there any more advanced functions?
There are more advanced functions located [here.](https://github.com/silentmatt/expr-eval/blob/master/README.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Maths" vertical="middle" /> <Badge type="tip" text="Calculate" vertical="middle" />