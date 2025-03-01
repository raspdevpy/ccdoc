# $displayName

Retrieves the display name of a specified user. This is the name that's shown for the user in a specific server, which may differ from their global username.

## Usage

```
$displayName[User ID]
```

**Parameters:**

*   **`User ID`:** The Discord User ID of the user whose display name you want to retrieve.  You can usually copy this ID by right-clicking on a user in Discord and selecting "Copy ID" (you may need to enable Developer Mode in Discord settings).

## Example

This example demonstrates how to use `$displayName` to get the display name of a user with the ID `788361834360864808`.

```
!!exec $displayName[788361834360864808]
```

**Expected Output:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $displayName[788361834360864808]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Mido
  </discord-message>
</discord-messages>

In this case, the user with the ID `788361834360864808` has the display name "Mido" in this server.