# $ban

Bans a user from the server.

## Usage

```bash
$ban[userID;reason;messages to delete]
```
1. **userID** - The ID of the user to ban.
2. **reason** - The reason for the ban.
3. **messages to delete** - The number of days to delete messages from this user. Maximum is 7 days, limited by Discord.

## Examples

#### Sucessful ban

Successful ban with no response

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $ban[123456789123456789;Spamming;7]
    </discord-message>
</discord-messages>

#### Unsucessful ban

Unsuccessful ban with error message

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $ban[$ownerID;Just a test;0]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        ❌ bot is missing enough permissions at line 1
    </discord-message>
</discord-messages>

::: tip Permissions
Make sure that the bot does have sufficient permission. The bot also needs to be higher in role hierarchy then the user.
:::

::: danger Important Note
If any member who can execute the command with this function, they will be able to ban any member below the bot's highest role.
Do not place the bot's role above Admin or Head Moderator roles to avoid banning important member.
:::

##### Related functions: [$kick](../Member/kick.md) [$unban](../Member/unban.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="ban" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />