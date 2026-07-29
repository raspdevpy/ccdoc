# $roleCount

The `$roleCount` function returns the total number of roles present in your Discord server (guild).

#### Usage: `$roleCount`

This function is straightforward to use. Simply include it in your command response to display the role count.

<br/>

**Example:**

Let's create a custom command that announces the total number of roles in the server.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec There are `$roleCount` roles in the server!
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		There are `23` roles in the server
	</discord-message>
</discord-messages>

In this example:

*   The user triggers the custom command with `!!exec`.
*   The command uses `$roleCount` to retrieve the role count.
*   The bot responds with a message stating, "There are `23` roles in the server" (the number will reflect the actual role count of the server).

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="count" vertical="middle" /> <Badge type="tip" text="amount of roles" vertical="middle" /> <Badge type="tip" text="return number" vertical="middle" />