# $timeStamp
Returns the current time since 1970 in ms.

#### Usage: `$timeStamp[Return in Seconds (Yes/No)]`
Note: Alias for $dateStamp
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $timeStamp, $timestamp[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		1630841854895, 1630841854
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="return" vertical="middle" /> <Badge type="tip" text="time" vertical="middle" /> <Badge type="tip" text="miliseconds" vertical="middle" />