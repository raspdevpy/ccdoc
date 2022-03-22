# $let
sets a temp value for during execution or till next bot restart.This functions is useful to temporary store variables ,like for to save a result of a calculation

#### Usage: `$let[variable name;variable value;remain after execution (yes/no , default no) (optional)]`
The first value will only exist till cc ends its execution,the second will be still accessable till next bot restart (every 5d)
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
