# $timeStamp
Returns the current time since 1970 in ms.

#### Usage: `$timeStamp`
Note: Alias for $dateStamp
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $timeStamp
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1630841854895
	</discord-message>
</discord-messages>

::: tip Unix Timestamp
If you want to use the inbuild discord feature, called "Unix Timestamp (Styled)"

You can use `$round[$math[$timeStamp]/1000]`
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="return" vertical="middle" /> <Badge type="tip" text="time" vertical="middle" /> <Badge type="tip" text="miliseconds" vertical="middle" />