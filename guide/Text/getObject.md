# $getObject
Returns the JSON of the created/modified object

#### Usage: `$getObject[spaces(optional, default 0)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createobject[{"Owner":"Rake","Manager":"Mika","Dev":"Mido","Contributor":"Wiki"}] Without spaces: $getobject
With spaces: $getobject[1]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Without spaces: {"Owner":"Rake","Manager":"Mika","Dev":"Mido","Contributor":"Wiki"}
With spaces: {
 "Owner": "Rake",
 "Manager": "Mika",
 "Dev": "Mido",
 "Contributor": "Wiki"
}
	</discord-message>
</discord-messages>
::: tip Actual usage
When you have a JSON object as a var, and you need to edit them, you will have to save the edits. You can do that by setting the var again, and use $getObject to return the modified string.
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" /> <Badge type="tip" text="string" vertical="middle" />