# $ObjectRemove

To remove a key from the object

## Usage

```bash
$ObjectRemove[Key;Key...(Optional)]
```

### Example:
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
!!exec $objectSet[Name;Mido]<br>
$objectSet[Country;EG]<br>
Before: $getObject<br>
$objectRemove[Name]<br>
After: $getObject
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
Before: {"Name":"Mido","Country":"EG"}
<br>
After: {"Country":"EG"}	</discord-message>
</discord-messages>
