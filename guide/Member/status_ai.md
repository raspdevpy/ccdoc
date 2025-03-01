# `$status` <Badge type="danger" text="Premium Only" vertical="middle" />

Displays the online status of a user.

#### Usage: `$status[userID]`

This function allows you to retrieve the current online status (e.g., Online, Offline, Idle, Do Not Disturb) of a specific user.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $status[$authorID]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Online
	</discord-message>
</discord-messages>

In this example, the command `!!exec $status[$authorID]` will return the status of the user executing the command.  If the user is online, the bot will respond with "Online".

::: warning
**Important:**  This function requires the **Presence Intent** to be enabled in your bot's settings on the Discord Developer Portal.  Without this enabled, the function will not work correctly.
:::

::: tip
**Related Functions:**

*   `[$authorID](../Member/authorID.md)`: Retrieves the ID of the user who executed the command.  You can use this to get the status of the command executor.
:::

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="status" vertical="middle" /> <Badge type="tip" text="member status" vertical="middle" /> <Badge type="tip" text="online" vertical="middle" /> <Badge type="tip" text="offline" vertical="middle" /> <Badge type="dnd" text="userID" vertical="middle" />