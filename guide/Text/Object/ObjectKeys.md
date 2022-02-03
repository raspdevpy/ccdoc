# $objectKeys
returns all the keys of an object with the provided separator

#### Usage: `$objectKeys[separator (optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"Name":"Rake","Age":18,"Role":"owner"}] $objectKeys
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Name Age Role
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="keys" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" />