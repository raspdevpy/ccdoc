# $objectGet
Get a object value/property by key, if the key is not found then return `undefined` (same as `$getObjectProperty`)

#### Usage: `$objectGet[key]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"BotName":"Custom Commands","BotOwner":"Rake","Contributor":"Wiki"}] Bot name: $objectGet[BotName], Owner: $objectGet[BotOwner], Docs Contributor: $objectGet[Contributor]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Bot name: Custom Commands, Owner: Rake, Docs Contributor: Wiki
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" /> <Badge type="tip" text="property" vertical="middle" />
