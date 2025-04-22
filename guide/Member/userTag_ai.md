# $userTag

Returns the username and tag (discriminator) of a user.

## Usage

```bash
$userTag[userID]
```
1. **userID** - (Opional) default value: `$authorID`. The ID of a user you want to return username and tag from.

## Example

#### Using $userTag

How to use $userTag

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User#1234" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userTag
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        user#1234
    </discord-message>
</discord-messages>

::: warning Note
This feature is deprecated because Discord switched to usernames. This function will return only username as of the username update. This still works on bots.
:::

##### Related functions: [$nickname](../Member/nickname.md) [$discriminator](../Member/discriminator.md) [$username](../Member/username.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="name" vertical="middle" /> <Badge type="tip" text="userTag" vertical="middle" /> <Badge type="tip" text="nickname" vertical="middle" /> <Badge type="tip" text="username" vertical="middle" /> <Badge type="tip" text="Names" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />