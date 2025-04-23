# $displayName

Returns the display name of a specified user. This is the name that's shown for the user in a specific server, which might be different from their global name.

## Usage

```bash
$displayName[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The user ID of the user you want to return display name from.

## Example

#### Using $displayName

How to return display name from author

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $displayName
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        User
    </discord-message>
</discord-messages>

##### Related functions: [$nickname](../Member/nickname.md) [$username](../Member/username.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="name" vertical="middle"/> <Badge type="tip" text="username" vertical="middle"/> <Badge type="tip" text="nickname" vertical="middle"/>