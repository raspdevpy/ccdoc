# $usersWithRole

This function retrieves a list of users who have a specific role within your Discord server. The information is pulled directly from the bot's cache.

## Usage

```bash
$usersWithRole[roleID;separator (optional, default: newline);id/username/tag/mention (optional, default: tag)]
```

**Parameters:**

*   **`roleID`**: The ID of the role you want to filter users by.
*   **`separator` (Optional)**: The character(s) used to separate the list of users. Defaults to a newline character (`\n`).
*   **`id/username/tag/mention` (Optional)**:  Specifies what information about each user to return.  Defaults to `tag` (username#discriminator).
    *   `id`: Returns the user's ID.
    *   `username`: Returns the user's username.
    *   `tag`: Returns the user's full Discord tag (username#discriminator).
    *   `mention`: Returns a mention of the user (e.g., `<@1234567890>`).

## Examples

### Example 1: Get usernames of users with the "Members" role, separated by commas.

```discord
!!exec $usersWithRole[Members;, ,username]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $usersWithRole[Members;, ,username]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Mido, Rake, Azz
    </discord-message>
</discord-messages>

### Example 2: Get tags of users with no specific role (provide empty role ID), separated by commas and a space.

```discord
!!exec users with no roles: $usersWithRole[;, ,tag]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec users with no roles: $usersWithRole[;, ,tag]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        LonelyWolf#1234, Stranger#5678
    </discord-message>
</discord-messages>

::: danger Warning

**Important:** This function relies on the bot's cache. If the cache is not fully populated (especially on larger servers or if the bot has recently started), the results may be incomplete or inaccurate.  Ensuring all guild members are cached is best achieved at tier 5.
:::