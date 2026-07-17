# $objectCreate
Creates a json object from the input 

Use `$getObjectProperty` or `$objectGet` to get a key value.
#### Usage: `$objectCreate[JSON string]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $objectCreate[{"Name":"Wiki","Level":20,"isExpert":true,"userId":327996784012034050}] Hi, my name is $objectget[Name]. Level $objectget[Level]. Am i expert? $objectget[isExpert]. My user id is $objectget[userId]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Hi, my name is Wiki. Level 20. Am i expert? true. My user id is 327996784012034050
	</discord-message>
</discord-messages>

::: tip Saving Object inside Vars
The example above shows how to save the object inside a variable and retrieve it later.
- with an object you can save many properties inside a variable.
```sh
$initvar[user;Data;{"Name":"none","Level":0,"isExpert":false,"userId":0}]
$objectCreate[$getuservar[Data]]
$objectSet[Name;Wiki]
$objectSet[Level;20]
$objectSet[isExpert;true]
$objectSet[userId;327996784012034050]

/*You can change the value by using $objectSet. You can save it inside a var by using $getObject*/
$setUserVar[Data;$getObject]
/* $getUserVar[Data] will now return: {"Name":"Wiki","Level":20,"isExpert":true,"userId":327996784012034050}*/

```
:::

::: tip  Get values from an array
```
{
  "string":"Needs quotation marks",
  "numbers":1234,
  "boolean":true/false,
  "array":["Value","Value","Value"],
  "group":{
"String":"Value",
"numbers":Value,
"boolean":Value
},
  "arrayGroup":[{
"String":"value"},{"String":"value"},{"String":"value"}]
}
```
* use `$objectGet[groupname;key]` to get the value or $objectGet[groupname;key;index] to get the value of an array
:::

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" />
