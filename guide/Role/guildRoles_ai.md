# $guildRoles

Returns a list of all roles in the guild, displaying their names, IDs, or mentions.

You can specify the type of information you want (ID, name, or mention) and limit the number of roles returned.

#### Usage:

`$guildRoles[type;amount]`

**Parameters:**

*   `type` (Optional):  Determines what information to return for each role. Possible values are:
    *   `id`: Returns the role's ID.
    *   `name`: Returns the role's name. (Default)
    *   `mention`: Returns the role's mention.
*   `amount` (Optional): The maximum number of roles to return. If omitted, all roles will be returned.

<br/>

**Example:**

This example shows how to retrieve the IDs of all roles in the guild.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $guildRoles[id]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243918787686431, 869243918817058856, 869243918489878654, 869250889813213244, 871289098231513098, 869251802556678154, 869243918489878650, 878284024232165407, 869249016213422150, 869250128136003614, 869243918787686434, 869248264426356736, 869243918787686436, 869243918489878657, 869243918489878653, 869250129272651787, 869250127347453992, 869250888106115092, 869243918787686430, 869243918787686432, 869243918817058857, 869249218169147422, 869243918489878652, 869244293959794720, 869250129901813820
	</discord-message>
</discord-messages>

::: tip Related Functions
*   [$roleID](../Role/roleID.md):  Retrieves a role ID by its name.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Guild Roles" vertical="middle" /> <Badge type="tip" text="all roles" vertical="middle" /> <Badge type="tip" text="server roles" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" /> <Badge type="tip" text="server/ guild" vertical="middle" />