# $globalName

Returns the global name of the user

## Usage

```bash
$globalName[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The user ID of the user you want to return global name from.

## Example

#### Using $globalName

How to return the global name from author

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $globalName
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        User
    </discord-message>
</discord-messages>

##### Related functions: [$displayName](../Member/displayName.md) [$nickname](../Member/nickname.md) [$username](../Member/username.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="name" vertical="middle"/> <Badge type="tip" text="name" vertical="middle"/> <Badge type="tip" text="global" vertical="middle"/>