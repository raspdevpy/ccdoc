# $rolePosition

Returns the position of a role in the server's role hierarchy. Roles with higher positions appear higher in the server's role list.

#### Usage:

`$rolePosition[role ID]`

**Example:**

`$rolePosition[827482937492837492]`

*   Replace `827482937492837492` with the actual role ID.

<br/>

**Example Scenario:**

Let's say you have a custom command that checks the position of the "Muted" role.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $rolePosition[$roleID[muted]]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        2
    </discord-message>
</discord-messages>

**Explanation:**

*   `!!exec $rolePosition[$roleID[muted]]`: This command attempts to execute the `$rolePosition` function using the role ID of the role named "muted" (obtained via `$roleID`).
*   `2`:  The bot responds with `2`, indicating that the "muted" role is in the 2nd position in the server's role hierarchy (higher numbers are generally higher positions, although some systems may number from 0).

**Important Notes:**

*   Role positions are relative to other roles within the server.
*   The role ID can be obtained by enabling Developer Mode in Discord (Settings > Advanced) and right-clicking on a role to copy its ID.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />