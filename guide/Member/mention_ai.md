# $mention

Returns a mention of a user.

## Usage

```bash
$mention[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user to get mentioned.

## Example

#### Using $mention

How to use $mention for author or other user

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec Me: $mention<br>
		Other user: $mention[123456789123456789]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        Me: <DiscordMention :highlight="true">User</DiscordMention><br>
		Other user: <DiscordMention :highlight="false">Other User</DiscordMention>
    </discord-message>
</discord-messages>

##### Related functions: [$username](../Member/username.md) [$nickname](../Member/nickname.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="ping" vertical="middle" /> <Badge type="tip" text="mention" vertical="middle" /> <Badge type="tip" text="author" vertical="middle" />