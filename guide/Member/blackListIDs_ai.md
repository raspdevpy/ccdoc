# $blackListIDs

Prevent specific users from using a command by blacklisting their Discord IDs.

## Description

The `$blackListIDs` function allows you to restrict access to a command for a specified list of users. If a blacklisted user attempts to use the command, the function will return a custom error message.

## Usage

```bash
$blackListIDs[userID;userID;...;error message]
```

**Parameters:**

*   `userID`: The Discord ID of a user to blacklist. Separate multiple IDs with semicolons (;).
*   `error message`: (Optional) The message to display if a blacklisted user tries to use the command.

## Examples

**Blacklisted User:**

In this example, user ID `788361834360864808` is blacklisted from using the command.

```discord
!!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]<br>Hello there!
```

This will produce the following output:

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]<br>Hello there!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are blacklisted from using this command!<br><br>
        </discord-message>
</discord-messages>

**Unblacklisted User:**

If the user is *not* blacklisted, the command will proceed as normal.  In this example, the user is not blacklisted, so the "Hello there!" message is returned.

```
!!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]
Hello there!
```

This will produce the following output, assuming the user is *not* blacklisted:

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $blackListIDs[788361834360864808;You are blacklisted from using this command!]<br>Hello there!<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello there!
        </discord-message>
</discord-messages>