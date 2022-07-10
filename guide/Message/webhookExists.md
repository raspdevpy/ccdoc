# $webhookExists
Checks if a webhook exists by using its ID and token, and return true or false


#### Usage: `
$webhookExists[webhookID;webhookToken]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
	!!exec $webhookExists[940749xx...;Oc_BoyAWxx...]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>


##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="webhook" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" />