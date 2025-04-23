# $blackListIDs

Prevent users from using a command by blacklisting their IDs.

## Usage

The `$blackListIDs` function allows you to restrict access to a command for a specified list of users. If a blacklisted user attempts to use the command, the function will return a custom error message.

```bash
$blackListIDs[userID;userID;...;error message]
```
1. **userID** - This makes user not able to run this command. You can add as many userIDs as you want, separated with semicolon (`;`).
2. **error message** - (Optional) default value: (none). If a blacklisted user attempts to run this command, this message will be sent. If empty, no message will be sent.

## Example

#### Blacklisted User

How to blacklist a user from the command

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $blackListIDs[$authorID;You are blacklisted from using this command!]<br>Message
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        You are blacklisted from using this command!
    </discord-message>
</discord-messages>

##### Related functions: [$blackListRoleIds](../Role/blackListRoleIds.md) [$blackListChannelIDs](../Channel/blackListChannelIDs.md) [$onlyForIDs](../Text/only/onlyForIDs.md) [$onlyForRoles](../Text/only/onlyForRoles.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="only for" vertical="middle"/> <Badge type="tip" text="blacklist" vertical="middle"/> <Badge type="tip" text="not allowed" vertical="middle"/>