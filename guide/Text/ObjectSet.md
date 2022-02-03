# $objectSet
Set a key value, or add, if key not found (same as `$addObjectProperty`, except it can set values inside groups/arrays and index)

#### Usage: `$objectSet[key;key;key....]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createObject[{"name":"Wiki"}] $objectSet[name;Rake] $getObject
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		{"name":"Rake"}
	</discord-message>
</discord-messages>

::: tip Setting a new key
```
$createobject[{"type":0}]

$objectset[version;2.5]
/* Simple setting, this will return {"type:0,"version":"2.5"} */

$createobject[{"type":0}]

$objectSet[userdata;age;20]
$objectSet[userdata;name;Member]
$objectSet[userdata;role;Moderator]
/* Set a new group and add new values to it. This will return {"type":0,"userdata":{"age":"20","name":"Member","role":"Moderator"}} */
:::

::: tip Setting values inside groups
```
 $createobject[{ "userdata":{
  "age":0,
  "name":"undefined",
  "role":"undefined"
}
}]
$objectSet[userdata;age;20]
$objectSet[userdata;name;Member]
$objectSet[userdata;role;Moderator]
/* this is the format for normal groups */

$createobject[{ "userdata":[{
  "age":0,
  "name":"undefined",
  "role":"undefined"
}]
}]
$objectSet[userdata;0;age;20]
$objectSet[userdata;0;name;Member]
$objectSet[userdata;0;role;Moderator]
/* and this is for array groups, which requires an index, in that case 0 */

```
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="set" vertical="middle" /> <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="add" vertical="middle" /> <Badge type="tip" text="property" vertical="middle" />