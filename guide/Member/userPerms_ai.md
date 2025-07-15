# $userPerms

Returns a list of permissions a user has in the current channel.

## Usage

```bash
$userPerms[userID;separator]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of a user you want to return permissions from.
2. **separator** - (Optional) default value: `, `. The separator used for creating permission list.

## Example

#### Using $userPerms

How to use $userPerms

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userPerms[;/]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        View Channel/Send Messages/Mention Everyone
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$rolePerms](../Role/rolePerms.md) [$hasPerms](../Member/hasPerms.md)

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="Member" vertical="middle" /> <Badge type="tip" text="Permissions" vertical="middle" /> <Badge type="tip" text="User Rights" vertical="middle" />