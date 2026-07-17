# $usersWithRole

Returns a list of users who have the given role. 

## Usage

```bash
$usersWithRole[roleID;separator;type]
```
1. **roleID** - (Optional) default value: (users without any roles). The ID of a role you want to retrive users with.
2. **separator** - (Optional) default value: `#NL#` (newline). The separator used for creating user list.
3. **type** - (Optional) default value: `tag`. Can be `tag`, `username`, `id` or `mention`.

## Example

#### Using $usersWithRole

How to use $usersWithRole

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $usersWithRole[;, ;username]
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

##### Related functions: [$userRoles](../Member/userRoles.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="Roles" vertical="middle"/> <Badge type="tip" text="Has Roles" vertical="middle"/>