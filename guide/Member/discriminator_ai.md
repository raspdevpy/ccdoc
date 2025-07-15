# $discriminator

Returns the discriminator of the user who executed the command, or a specified member.

## Usage:

```bash
$discriminator[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user you want to return the discriminator from.

## Example

#### Using $discriminator

Returning a discriminator from user

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User#1234" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $discriminator
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        1234
    </discord-message>
</discord-messages>

::: warning Note
This feature is deprecated because Discord switched to usernames. This function will return 0 as of the username update. This still works on bots.
:::

##### Related functions: [$username](../Member/username.md) [$nickname](../Member/nickname.md) [$userTag](../Member/userTag.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="name" vertical="middle"/> <Badge type="tip" text="tag" vertical="middle"/> <Badge type="tip" text="discriminator" vertical="middle"/>