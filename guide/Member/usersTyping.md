# $usersTyping

Returns a list of users currently typing in a channel. If no users are typing, returns an empty string.

## Usage

```bash
$usersTyping[channelID;type;separator]
```
1. **channelID** - (Optional) default value: `$channelID`. The ID of a channel you want to check users typing in.
2. **type** - (Optional) default value: `username`. Can be `username`, `tag` or `mention`.
3. **separator** - (Optional) default value: `, `. The separator used for creating list with users.

## Example

#### Using $usersTyping

How to use $usersTyping

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $usersTyping
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        user, user1, user2
    </discord-message>
</discord-messages>

::: tip Tip
The bot needs the "Read Messages/View Channels" permission in the given channel to be able to see who is typing.
Rate limits may apply if this function is used excessively.
:::

##### Related functions: [$usersInChannel](../Member/usersInChannel.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="typing" vertical="middle"/> <Badge type="tip" text="users" vertical="middle"/> <Badge type="tip" text="channel" vertical="middle"/>