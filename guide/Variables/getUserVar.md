# $getUserVar
Gets a user variable value

#### Usage: `$getUserVar[variable;userid(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $getUserVar[warnings;683630053686378498]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		4
	</discord-message>
</discord-messages>

or executors(author/you) warning count: 

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $getUserVar[warnings]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setUserVar](../Variables/setUserVar.md)

Check out: [$deleteUserVar](../Variables/deleteUserVar.md)

Check out: [$resetUserVar](../Variables/resetUserVar.md)
:::
