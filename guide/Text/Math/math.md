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
Operator                 | Associativity | Description
:----------------------- | :------------ | :----------
(...)                    | None          | Grouping (brackets)
!                        | Left          | Factorial
^                        | Right         | Exponentiation
+, -, sqrt               | Right         | Unary prefix operators
\*, /, %                 | Left          | Multiplication, division, remainder
+, -                     | Left          | Addition, subtraction
:::

## Below are quite advanced operators you can use, if you want to.
:::details Advanced operators
Operator | Description
:------- | :----------
-x       | Negation
+x       | Unary plus. This converts it's operand to a number, but has no other effect.
x!       | Factorial (x * (x-1) * (x-2) * … * 2 * 1). gamma(x + 1) for non-integers.
abs x    | Absolute value (magnitude) of x
acos x   | Arc cosine of x (in radians)
acosh x  | Hyperbolic arc cosine of x (in radians)
asin x   | Arc sine of x (in radians)
asinh x  | Hyperbolic arc sine of x (in radians)
atan x   | Arc tangent of x (in radians)
atanh x  | Hyperbolic arc tangent of x (in radians)
cbrt x   | Cube root of x
ceil x   | Ceiling of x — the smallest integer that’s >= x
cos x    | Cosine of x (x is in radians)
cosh x   | Hyperbolic cosine of x (x is in radians)
exp x    | e^x (exponential/antilogarithm function with base e)
expm1 x  | e^x - 1
floor x  | Floor of x — the largest integer that’s <= x
length x | String or array length of x
ln x     | Natural logarithm of x
log x    | Natural logarithm of x (synonym for ln, not base-10)
log10 x  | Base-10 logarithm of x
log2 x   | Base-2 logarithm of x
log1p x  | Natural logarithm of (1 + x)
not x    | Logical NOT operator
round x  | X, rounded to the nearest integer, using "grade-school rounding"
sign x   | Sign of x (-1, 0, or 1 for negative, zero, or positive respectively)
sin x    | Sine of x (x is in radians)
sinh x   | Hyperbolic sine of x (x is in radians)
sqrt x   | Square root of x. Result is NaN (Not a Number) if x is negative.
tan x    | Tangent of x (x is in radians)
tanh x   | Hyperbolic tangent of x (x is in radians)
trunc x  | Integral part of a X, looks like floor(x) unless for negative number
:::

:::details Advanced pre-defined functions
Function      | Description
:------------ | :----------
random(n)     | Get a random number in the range [0, n). If n is zero, or not provided, it defaults to 1.
min(a,b,…)    | Get the smallest (minimum) number in the list.
max(a,b,…)    | Get the largest (maximum) number in the list.
hypot(a,b)    | Hypotenuse, i.e. the square root of the sum of squares of its arguments.
pyt(a, b)     | Alias for hypot.
pow(x, y)     | Equivalent to x^y. For consistency with JavaScript's Math object.
atan2(y, x)   | Arc tangent of x/y. i.e. the angle between (0, 0) and (x, y) in radians.
roundTo(x, n) | Rounds x to n places after the decimal point.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Maths" vertical="middle" /> <Badge type="tip" text="Calculate" vertical="middle" />