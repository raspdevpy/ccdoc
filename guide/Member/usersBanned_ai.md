# $usersBanned

Returns a list of users banned from the current server.

## Usage

```bash
$usersBanned[type;separator]
```
1. **type** - (Optional) default value: `username`. Can be `id`, `username` or `mention`. What format of returned users do you want.
2. **separator** - (Optional) default value: `, `. The separator used for creating the list of users.

## Example

#### Using $usersBanned

How to use $usersBanned

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $usersBanned
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        user, user1, user2
    </discord-message>
</discord-messages>

::: tip Permissions
Make sure that the bot does have sufficient permission.
:::

##### Related functions: [$ban](../Member/ban.md) [$unban](../Member/unban.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="ban" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />