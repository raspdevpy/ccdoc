# $roleName

Retrieves the name of a role using its ID.

#### Usage:

`$roleName[roleID]`

Replace `roleID` with the actual ID of the role you want to find.

<br/>

#### Example:

This example shows how to use the `$roleName` function to find the name of the role with the ID `869243918787686439`.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleName[869243918787686439]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Custom Command
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="get name" vertical="middle" /> <Badge type="tip" text="Find role name" vertical="middle" /> <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />