# $getMessageVar
Gets a message variable value

#### Usage: `$getMessageVar[variable;messageID(optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $getMessageVar[data]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 Mido
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$setMessageVar](../Variables/setMessageVar.md)

Check out: [$deleteMessageVar](../Variables/deleteMessageVar.md)
:::
