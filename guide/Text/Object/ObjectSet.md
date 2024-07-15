# $objectSet
set an object property value by key

#### Usage: `$objectSet[key;key;key....;value]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $objectCreate[{"name":"Wiki"}] $objectSet[name;Rake] $objectSet[tag;0001] $getObject
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		{"name":"Rake","tag":"0001"}
	</discord-message>
</discord-messages>

::: tip Setting Objects inside Objects
```
$objectCreate[{"type":0}]

$objectset[version;2.5]
/* will return {"type:0,"version":"2.5"} */

$objectCreate[{"type":0}]

$objectSet[userdata;age;20]
$objectSet[userdata;name;Member]
$objectSet[userdata;role;Moderator]
/* will return {"type":0,"userdata":{"age":"20","name":"Member","role":"Moderator"}} */
:::

::: tip Setting values inside array
```
 $objectCreate[{ "userdata":{
  "age":0,
  "name":"undefined",
  "role":"undefined"
}
}]
$objectSet[userdata;age;20]
$objectSet[userdata;name;Member]
$objectSet[userdata;role;Moderator]
/* this is the format for normal groups */

$objectCreate[{ "userdata":[{
  "age":0,
  "name":"undefined",
  "role":"undefined"
}]
}]
$objectSet[userdata;0;age;20]
$objectSet[userdata;0;name;Member]
$objectSet[userdata;0;role;Moderator]
/* sets a property inside am array by index */

```
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="set" vertical="middle" /> 
