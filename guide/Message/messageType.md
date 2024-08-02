# $messageType
Returns the type of this message.

#### Usage: `$messageType`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageType
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Default
	</discord-message>
</discord-messages>

::: tip Note
This function returns a type of message from this [list.](../CodeReferences/ref.message_types.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="type" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />
