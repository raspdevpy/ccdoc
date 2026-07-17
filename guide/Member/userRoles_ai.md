# $userRoles

Returns the list of roles from a user.

## Usage

```
$userRoles[userID;type;separator]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of a user you want to return roles from.
2. **type** - (Optional) default value: `names`. Can be `ids`, `names` or `mentions`. What format of returned roles do you want.
3. **separator** - (Optional) default value: `, `. The separator used for creating roles list.

## Example

#### Using $userRoles

How to return roles from message author

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userRoles[;ids;/]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789987654321/123456789123456789
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$hasRoles](../Member/hasRoles.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="roles" vertical="middle" />