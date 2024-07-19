# $deleteUserVar
Deletes a user variable, from the author of the command or from the ID specified.

#### Usage: `$deleteUserVar[variable;userID]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $deleteUserVar[Creator;$authorID]
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setUserVar](../Variables/setUserVar.md)

Check out: [$getUserVar](../Variables/getUserVar.md)

Check out: [$resetUserVar](../Variables/resetUserVar.md)
:::
