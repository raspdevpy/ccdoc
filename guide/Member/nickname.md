# $nickname

Returns the nickname of the user.

## Usage

```bash
$nickname[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user to return nickname from.

## Example

#### Using $nickname

How to use $nickname

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="ImUser" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $nickname
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        ImUser
    </discord-message>
</discord-messages>

##### Related functions: [$changeNickname](../Member/changeNickname.md) [$username](../Member/username.md) [$discriminator](../Member/discriminator.md) [$userTag](../Member/userTag.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" />