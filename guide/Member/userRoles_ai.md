# `$userRoles`

Retrieves the roles of a user. Can target the current user, a user specified by ID, or a user mentioned in the message.

#### Usage:

```
$userRoles
$userRoles[userID;ids/names/mentions (optional);separator (optional)]
```

*   **`$userRoles`**:  Returns the roles of the user executing the command.
*   **`$userRoles[userID;ids/names/mentions (optional);separator (optional)]`**: Allows you to specify the user and how the roles should be formatted.

    *   **`userID`**:  The ID of the user whose roles you want to retrieve.  Can also use a mention.
    *   **`ids/names/mentions` (optional)**: Specifies what to display:
        *   `ids`:  Displays the role IDs.
        *   `names`:  Displays the role names. (Default if omitted)
        *   `mentions`: Displays the roles as mentions (`<@&roleID>`).
    *   **`separator` (optional)**:  The character or string used to separate the roles. If omitted, a comma and a space (`, `) is used.

<br/>

**Example:**

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userRoles[$authorID;names]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Dev, Support, Staff Emergency Ping, EXPERT, Member
	</discord-message>
</discord-messages>
```

This example retrieves the roles of the author and displays them as names, separated by commas and spaces.

::: tip Related Functions
*   [`$hasRoles`](../Member/hasRoles.md): Checks if a user has specific roles.
:::

::: info Important: Member Caching
When using the main bot, the member must be cached to ensure accurate results. If you are using a custom bot, you can ignore this message.  This means the bot must have interacted with the user (e.g., seen a message from them) recently.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="roles" vertical="middle" />