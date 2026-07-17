# $let
Define a variable, that you can access later through [$get](./get.md).
This function is useful to temporarily store variables, like to save the result of a calculation

#### Usage: `$let[variable name;variable value;remain after execution (yes/no , default no) (optional)]`
The first value will only exist until cc ends its execution,the second will still be accessable until next bot restart (every 5d)
You can use $get[varname] or $varname to retrieve the value
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $let[orange;10] or $let[apple;10;yes]
	</discord-message>
</discord-messages>


::: tip Related Functions
Check out: [$get](../Variables/get.md)
:::
