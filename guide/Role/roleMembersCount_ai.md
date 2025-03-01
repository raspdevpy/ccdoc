# $roleMembersCount

This function returns the number of members in a Discord server that have a specific role.

::: danger Warning
The data used by this function comes from the bot's cache, not the Discord API directly.  This means the count might not be 100% accurate *unless* all members of the server are cached by the bot.  Full caching is generally only achieved in Tier 5 servers due to the sheer volume of members.
:::

**Usage:** `$roleMembersCount[roleId]`

*   `roleId`: The ID of the Discord role you want to count members for.  You can get this ID by right-clicking the role in your server settings (make sure you have Developer Mode enabled in Discord settings).

**Example:**

If you have a role with the ID `123456789012345678`, the function would look like this:

`$roleMembersCount[123456789012345678]`

This would return the number of members who currently have that role.

**Function Difficulty:** <Badge type="tip" text="Easy" vertical="middle" />

**Tags:** <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="members" vertical="middle" /> <Badge type="tip" text="count" vertical="middle" />