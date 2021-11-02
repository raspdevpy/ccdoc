# $slowmode
Sets a channel slowmode (or removes it by using 0).

#### Usage: `$slowmode[channelID;time]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $slowmode[827092891225817088;10s]
</discord-message>
</discord-messages>

::: tip Useful Functions
[$channelID](channelID.md), Return the ID of the channel the command is executed in.

:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="slowmode" vertical="middle" />