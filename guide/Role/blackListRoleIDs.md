# $blackListRoleIds
Blacklist roles from using this command by using their IDs.

#### Usage: `$blackListRoleIDs[roleID;roleID;...;error message]`
<br/>
```bash

/* Let's say i have a command !ban and i want members unable to use it */
$blackListRoleIds[9872xx..;You can't use that command!]
$ban[$mentioned[1]]
Suceful ban
```
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!ban @RAKE
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		You can't use that command!
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="blacklist" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />