# $getObjectProperty
Get a object value/property by key (same as `$objectGet`, except `$objectGet` returns `undefined` if key not found)

#### Usage: `$getObjectProperty[key]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"BotName":"Custom Commands","BotOwner":"Rake","Contributor":"Wiki"}] Bot name: $getObjectProperty[BotName], Owner: $getObjectProperty[BotOwner], Docs Contributor: $getObjectProperty[Contributor]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Bot name: Custom Commands, Owner: Rake, Docs Contributor: Wiki
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" /> <Badge type="tip" text="property" vertical="middle" />