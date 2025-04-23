# $kick

Kicks a user from the server.

## Usage

```bash
$kick[userID;reason]
```
1. **userID** - The ID of the user to kick.
2. **reason** - (Optional) The reason for kick. You can see this in Audit Log.

## Example

#### Successful kick

Successfull kick with no response

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $kick[123456789123456789;Spamming]
    </discord-message>
</discord-messages>

#### Unsucessful kick

Unsuccessful kick with error message

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $kick[$ownerID;Spamming]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        ❌ bot is missing enough permissions at line 1
    </discord-message>
</discord-messages>

::: tip Bot is missing enough permissions
The most common reason is that the bot's role is lower in the role hierarchy than the member you are trying to ban.
Discord doesn't allow members and bots from kicking members with a higher or equal highest role. Ensure the bot's highest role is above the target user.
:::

::: danger Important Note
If any member who can execute the command with this function, they will be able to kick any member below the bot's highest role.
Do not place the bot's role above Admin or Head Moderator roles to avoid kicking important member.
:::

##### Related functions: [$ban](../Member/ban.md) [$unban](../Member/unban.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="kick" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />