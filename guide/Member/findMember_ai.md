# $findMember

Searches for a user in the current server by their nickname, ID, mention, username, or username with discriminator. Returns userID of the found user.

## Usage:

```bash
$findMember[query;returnCurrentUser]
```
1. **query** - Can be userID, nickname, mention, username, username#descriminator.
2. **returnCurrentUser** - (Optional) default value: `yes`. Can be either `yes` or `no`. If this is set to yes, when user is not found, it will return $authorID. If it's no, and user is not found, it will return undefined.

## Example

#### Successful search

Searching for existing user

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $findMember[user2;no]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789123456789
    </discord-message>
</discord-messages>

#### Unsuccessful search

Searching for invalid user

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $findMember[user123;no]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        undefined
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$userID](../Member/userID.md) [$authorID](../Member/authorID.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="search" vertical="middle"/> <Badge type="tip" text="find" vertical="middle"/> <Badge type="tip" text="member" vertical="middle"/>