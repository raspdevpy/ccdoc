# $getObject
returns the JSON of the created/modified object

#### Usage: `$getObject[spaces(optional, default 0)]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createobject[{"Owner":"Rake","Manager":"Mika","Dev":"Mido","Contributor":"Wiki"}] Without spaces: $getobject
With spaces: $getobject[1]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Without spaces: {"Owner":"Rake","Manager":"Mika","Dev":"Mido","Contributor":"Wiki"}
With spaces: {<br/>
 "Owner": "Rake",<br/>
 "Manager": "Mika",<br/>
 "Dev": "Mido",<br/>
 "Contributor": "Wiki"<br/>
}
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" />
