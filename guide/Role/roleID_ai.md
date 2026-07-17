# $roleID

Retrieves the ID of a specified role.

#### Usage:

`$roleID[ROLE NAME]`

**Argument:**

*   `ROLE NAME`: The name of the role you want to get the ID for.  This is case-sensitive.

<br/>

**Example:**

Let's say you have a role named "muted" in your server.  The following example demonstrates how to retrieve its ID.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleID[muted]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		772053356378062889
	</discord-message>
</discord-messages>

In this example, the command returns `772053356378062889`, which is the ID of the "muted" role.

::: tip Related Functions
*   [$findRole](../Role/findRole.md):  Use this function to find a role by its name or mention if you are unsure of the exact name.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="get ID" vertical="middle" /> <Badge type="tip" text="Find role ID" vertical="middle" /> <Badge type="tip" text="ID" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />