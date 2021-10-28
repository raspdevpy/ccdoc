# $deleteMessageVar
Deletes a message variable, from the command trigger or from the ID specified.

#### Usage: `$deleteMessageVar[variable;MessageID(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $deleteMessageVar[Author]
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setMessageVar](../Variables/setMessageVar.md)

Check out: [$getMessageVar](../Variables/getMessageVar.md)
:::
