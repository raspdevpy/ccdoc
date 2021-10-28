# $setChannelVar
Sets a channel variable value.

#### Usage: `$setChannelVar[variable;value;channelID (optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $setChannelVar[Creator;Mido;$channelID]
	</discord-message>
</discord-messages>

or for current Channel

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $setChannelVar[Creator;Mido]
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$getChannelVar](../Variables/getChannelVar.md)

Check out: [$deleteChannelVar](../Variables/deleteChannelVar.md)
:::
