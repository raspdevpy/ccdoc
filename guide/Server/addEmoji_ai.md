# $addEmoji

Adds an emoji to the current Discord server (guild). You can optionally restrict the emoji's use to specific roles.

#### Usage: `$addEmoji[url;name;returnEmoji (yes/no)(optional);roleID1;roleID2;...]`

**Parameters:**

*   `url`: The URL of the image to use for the emoji.  Must be a direct link to the image file (e.g., `.png`, `.jpg`, `.gif`).
*   `name`: The name you want to give the emoji. This will be used to reference the emoji in chat (e.g., `:CustomCommandSupport:`).
*   `returnEmoji (yes/no) (optional)`:  Determines whether the function returns the new emoji's ID.  If set to `yes`, the function will return the emoji ID.  If `no` (or omitted), it won't return anything.
*   `roleID1;roleID2;... (optional)`: A semicolon-separated list of role IDs.  If provided, only users with one or more of these roles will be able to use the emoji.  Leave blank for no role restrictions.

<br/>

**Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addEmoji[https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp;CustomCommandSupport;no]
	</discord-message>
</discord-messages>

**Explanation:**

This example will add an emoji to the server named "CustomCommandSupport" using the image from the provided URL.  The emoji will be available to all members of the server as `CustomCommandSupport`.  The function will not return the ID of the new emoji.

**Permissions:**

This function requires the bot to have the following permissions:

*   **Manage Emojis**

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />