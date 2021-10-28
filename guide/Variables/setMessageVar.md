# $setMessageVar
Sets a message variable value.

#### Usage: `$setMessageVar[variable;value;messageID(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $setMessageVar[Creator;Mido;$messageID]
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$getMessageVar](../Variables/getMessageVar.md)

Check out: [$deleteMessageVar](../Variables/deleteMessageVar.md)
:::
