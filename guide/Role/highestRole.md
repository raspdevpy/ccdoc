# $highestRole

Retrieves the highest role (in terms of hierarchy) a user has in the current guild.

#### Usage:

`$highestRole[userID]` - Returns the highest role of the user with the specified `userID`.

`$highestRole` - Returns the highest role of the command executor (the user who triggered the command).

<br/>

**Example:**

This example shows how to use `$highestRole` with `$roleName` to output the role's name.

```discord
!!exec $roleName[$highestRole]
```

**Result:**

(Assuming the user's highest role is "Admin")

```discord
Admin
```

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleName[$highestRole]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Admin
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="Highest Role" vertical="middle" /> <Badge type="tip" text="Role Hierarchy" vertical="middle" />