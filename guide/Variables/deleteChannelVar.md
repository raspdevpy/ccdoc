# $deleteChannelVar
Deletes a channel variable, from the command trigger channel or from the ID specified.

#### Usage: `$deleteChannelVar[variable;channelID(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $deleteChannelVar[Creator]
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setChannelVar](../Variables/setChannelVar.md)

Check out: [$getChannelVar](../Variables/getChannelVar.md)
:::
