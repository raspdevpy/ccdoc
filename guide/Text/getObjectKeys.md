# $getObjectKeys
Returns all the object keys with optional separator between each key (default is space) (same as `$objectKeys`)

#### Usage: `$getObjectKeys[Seperator (optional)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"Name":"Rake","Age":18,"Role":"owner"}] $getObjectKeys
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Name Age Role
	</discord-message>
</discord-messages>

::: tip Actual usage
```
 $createObject[{
"Gender":"male/female",
"Age":0,
"Hobbies":"undefined"
}
]
$sendmessage[You have to fill these informations first: $getObjectKeys[,]]
```
![](https://cdn.discordapp.com/attachments/914682255346118687/938594054910930964/Screenshot_20220202213652.jpg)
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="keys" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" />