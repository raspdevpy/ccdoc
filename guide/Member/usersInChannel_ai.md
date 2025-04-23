# $usersInChannel

Returns a list of users in given text or voice channel.

## Usage

```bash
$usersInChannel[channelID;type;separator]
```
1. **channelID** - (Optional) default value: `$channelID`. The ID of a channel you want to return list of users from.
2. **type** - (Optional) default value: `username`. Can be `id`, `username`, `mention` or `count`.
3. **separator** - (Optional) default value: `, `. The separator used for creating list of users.

## Example

#### Using $usersInChannel

How to use $usersInChannel

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $usersInChannel
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        user, user1, user2
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$usersWithRole](../Member/usersWithRole.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="InChannel" vertical="middle" /> <Badge type="tip" text="users" vertical="middle" />