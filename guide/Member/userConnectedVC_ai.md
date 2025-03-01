# $userConnectedVC

Retrieves the ID of the voice channel a user is currently connected to.

## Usage

```bash
$userConnectedVC[User ID (defaults to $authorID)]
```

**Parameters:**

*   **User ID (Optional):** The ID of the user whose voice channel ID you want to retrieve. If omitted, it defaults to the ID of the message author (`$authorID`).

## Functionality

This function checks if the specified user is connected to a voice channel. If they are, it returns the ID of that voice channel. If the user is not connected, it returns `undefined`.

## Example

This example demonstrates how to use `$userConnectedVC` to retrieve the voice channel ID of the message author.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $userConnectedVC[$authorID]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    951224449250779199
  </discord-message>
</discord-messages>

**Explanation:**

*   The member sends the command `!!exec $userConnectedVC[$authorID]`.
*   The custom command executes the `$userConnectedVC` function with the author's ID.
*   If the member is connected to a voice channel (in this case, with ID `951224449250779199`), that ID is returned. Otherwise, "undefined" would be returned.