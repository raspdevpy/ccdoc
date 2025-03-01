# $hasAnyRole

This function checks if a user has at least one of the specified roles. You can check the message author's roles or specify a different user ID.

## Usage

```bash
$hasAnyRole[roleID1;roleID2;...]
```

```bash
$hasAnyRole[userID;roleID1;roleID2;...]
```

**Parameters:**

*   **`roleID1;roleID2;...`:**  A semicolon-separated list of role IDs to check for.
*   **`userID` (Optional):** The ID of the user to check. If omitted, the message author's ID is used.

## Examples

**Example 1: Checking if the message author has the "Admin" role:**

In this example, we use `$onlyIf` to prevent the command from executing if the author does not have the "Admin" role.  Replace `"Admin"` with the actual ID of your Admin role.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Admin">
    !!exec $onlyIf[$hasAnyRole[$authorID;Admin]==true;You are not admin]<br>You are admin!<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    You are admin!
  </discord-message>
</discord-messages>

**Example 2: Checking if a normal user (without the "Admin" role) attempts the same command:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Normal User">
    !!exec $onlyIf[$hasAnyRole[$authorID;Admin]==true;You are not admin]<br>You are admin!<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    You are not admin
  </discord-message>
</discord-messages>