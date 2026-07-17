# $blackListRoleIds

This function prevents users with specific roles from using a command. You specify the role IDs and an error message to display when someone with a blacklisted role tries to execute the command.

#### Usage: `$blackListRoleIDs[roleID;roleID;...;error message]`

*   **roleID:** The ID of the role you want to blacklist. Separate multiple role IDs with a semicolon (;).
*   **error message:** The message the bot will send if a user with a blacklisted role tries to use the command.

<br/>

**Example:**

Let's say you have a command `!ban` and you want to prevent users with a specific role from using it.

```bash
$blackListRoleIds[9872xx..;You are not authorized to use this command!]
$ban[$mentioned[1]]
Successfully banned user.
```

**Explanation:**

*   `$blackListRoleIds[9872xx..;You are not authorized to use this command!]`:  This line checks if the user executing the command has the role with the ID `9872xx..`. If they do, the bot will reply with "You are not authorized to use this command!".
*   `$ban[$mentioned[1]]`: This line executes the ban command, banning the mentioned user. It only executes if the user does *not* have a blacklisted role.
*   `Successfully banned user.`: This line sends a confirmation message after a successful ban.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !ban @RAKE
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You are not authorized to use this command!
    </discord-message>
</discord-messages>

::: tip Note
You can send an embed instead of a simple text message by using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md) in your error message.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="blacklist" vertical="middle" /> <Badge type="tip" text="roles" vertical="middle" />