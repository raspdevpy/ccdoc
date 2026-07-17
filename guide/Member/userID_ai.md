# $userID

Returns a user ID based on the given username.

## Usage
```bash
$userID[username]
```
1. **username** - (Optional) if not provided, $authorID will be returned. The username of a user you want to return ID of.

## Example

#### Using $userID

How to use $userID

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userID[user]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789123456789
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$authorID](../Member/authorID.md) [$findMember](../Member/findMember.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="user" vertical="middle" /> <Badge type="tip" text="Member ID" vertical="middle" /> <Badge type="tip" text="User ID" vertical="middle" /> <Badge type="tip" text="Username" vertical="middle" />