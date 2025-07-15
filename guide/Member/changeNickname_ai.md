# $changeNickname

Changes the nickname of a specified member in the server.

## Usage:

```bash
$changeNickname[userID;nickname]
```
1. **userID** - The ID of the member whose nickname you want to change.
2. **nickname** - The new nickname you want to assign to the member.

## Example

#### Using $changeNickname

Changing the nickname of the command author

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $changeNickname[$authorID;Steve]
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="Steve" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        Hello
    </discord-message>
</discord-messages>

::: tip Permissions
The bot requires the "Manage Nicknames" permission to change nicknames and only change nicknames of members with roles lower than bots highest role.
:::

::: danger Discord restiriction
Discord doesn't allow others to change owners nickname. If you will try to change nickname of an invalid member or owner, error message will be shown.
:::

##### Related functions: [$nickname](../Member/nickname.md)

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="change Nickname" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="modify name" vertical="middle" />