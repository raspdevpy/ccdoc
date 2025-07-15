# $userExists

Checks if a user exists in the server. Returns `true` if the user exists, and `false` if not.

## Usage

```bash
$userExists[userID]
```
1. **userID** - The ID of the user to check. If left empty, false will be returned.

## Example

#### Using $userExists

How to use $userExists

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userExists[$authorID]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        true
    </discord-message>
</discord-messages>

::: warning Cache
This function works on the bot's cache to find members.
If the user is not cached, the function will not find them.
User will be cached after they trigger any command from this bot, but eventually they will get deleted.<br>
To have all members cached, you will need Tier 5 Bot.
:::

##### Related functions: [$findMember](../Member/findMember.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="User" vertical="middle" /> <Badge type="tip" text="Exists" vertical="middle" /> <Badge type="tip" text="Check" vertical="middle" /> <Badge type="tip" text="Is Real" vertical="middle" />