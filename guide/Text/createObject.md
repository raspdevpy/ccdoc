# $createObject
Create a json object from the input (same as `$ObjectCreate`)
::: warning Invalid JSON will throw error message
:::

Use `$getObjectProperty` or $objectGet` to get a key value.
#### Usage: `$createObject[JSON string]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $CreateObject[{"Name":"Wiki","Level":20,"isExpert":true,"userId":327996784012034050}] Hi, my name is $objectget[Name]. Level $objectget[Level]. Am i expert? $objectget[isExpert]. My user id is $objectget[userId]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Hi, my name is Wiki. Level 20. Am i expert? true. My user id is 327996784012034050
	</discord-message>
</discord-messages>
::: tip You can save multiple data in just one var using objects!
In the below example, i'll init a var with 4 simples informations i want about a user. Them i'll fill it with actual data, and save it again so i can get later.
```
 $initvar[user;Data;{"Name":"none","Level":0,"isExpert":false"userId":0}]
$createObject[$getuservar[Data]]
$objectSet[Name;Wiki]
$objectSet[level;20]
$objectset[isExpert;true]
$objectset[userId;327996784012034050]
/* i changed the values of the JSON object using $objectSet. Now, i'll save it using $getObject to return the whole JSON */

$setuservar[data;$getobject]
/* Done! now if i use $getuservar[data] this is what will return: {"Name":"Wiki","Level":20,"isExpert":true,"userId":327996784012034050}*/

```
:::

::: tip Some basic JSON notation
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

/* Get a value inside a group using $objectGet[groupname;key]
Get a value inside an array group using $objectGet[groupname;indexNumber(default 0);key] */

```

##### Function Difficultly: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="object" vertical="middle" /> <Badge type="tip" text="json" vertical="middle" /> <Badge type="tip" text="data" vertical="middle" />