# $roleExists

Checks if a role exists within the server and returns a boolean value (true or false).

#### Usage:

`$roleExists[roleID]`

**Parameters:**

*   `roleID`: The ID of the role you want to check.

<br/>

**Example:**

```discord
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $roleExists[$roleID[muted]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>
```

**Explanation:**

This example checks if a role with the name "muted" exists on the server.  First, `$roleID[muted]` resolves to the role ID of the role named "muted" (if it exists).  Then, `$roleExists` checks if a role with that ID exists. The command returns `true` if the role exists and `false` if it doesn't.

::: tip Used Functions
*   [$roleID](../Role/roleID.md):  Retrieves a role's ID by its name.
:::

::: tip Related Functions
*   [$findRole](../Role/findRole.md):  Finds roles by name or mention.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="exists" vertical="middle" /> <Badge type="tip" text="check" vertical="middle" /> <Badge type="tip" text="is real" vertical="middle" /> <Badge type="tip" text="server role" vertical="middle" />