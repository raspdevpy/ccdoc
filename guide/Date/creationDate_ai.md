# $creationDate

Retrieves the creation date of a Discord entity (channel, guild, emoji, user, or role) based on its ID.

#### Usage: `$creationDate[entityID;format (optional)]`

**Arguments:**

*   `entityID`: The ID of the Discord entity you want to retrieve the creation date for.  This can be a channel ID, guild ID, emoji ID, user ID, or role ID.
*   `format` (Optional): Specifies the desired format for the output.  If omitted, the default format will be used.  Possible values are:
    *   `date`: Returns the date only.
    *   `ms`: Returns the creation date in milliseconds since the Unix epoch.

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $creationDate[725721249652670555;date]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Thursday, June 25, 2020 02:37 PM
	</discord-message>
</discord-messages>

::: tip Timezone Information
Date functions default to the UTC timezone. To change this, see the [Timezone Configuration](./timezone.md) guide.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
