# $usersBanned

This function retrieves a list of users banned from the current guild (server).

## Usage

```bash
$usersBanned or $usersBanned[options]
```

**Options:**

*   `id/mention/username`:  Specifies how to identify the users. This is optional.
    *   `id`: Filters the list to only include banned users whose ID matches the provided value.
    *   `mention`: Filters the list to only include banned users who are mentioned.  This is unlikely to return a result as banned users are unlikely to be in a mention-able state.
    *   `username`: Filters the list to only include banned users whose username matches the provided value.
*   `separator`:  (Optional) The character or string used to separate the usernames/IDs in the returned list. If not specified, the default separator is likely to be a comma.

## Example

This example demonstrates how to retrieve a list of banned users and display their usernames, separated by commas.

```bash
$usersBanned[username;, ]
```

**Explanation:**

*   `username`:  We are specifically requesting to display the usernames of the banned users.
*   `;, ` :  We are using a comma followed by a space as the separator between each username in the output.

**Discord Example:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $usersBanned[username;, ]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Mido, Rake, Azz
  </discord-message>
</discord-messages>

**Important Considerations:**

*   The bot requires the `Ban Members` permission to execute this function successfully.