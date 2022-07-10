# $ObjectValues
returns all the values of an object with the provided separator

#### Usage: `$ObjectValues[Separator (optional, default:, )]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"Owner":"Rake","Manager":"Mika","Dev":"Mido","Contributor":"Wiki"}] Staff members: $objectValues
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Staff members: Rake, Mika, Mido, Wiki
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="values" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" /> <Badge type="tip" text="property" vertical="middle" />