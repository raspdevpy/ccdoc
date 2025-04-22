# $isBanned

Checks if a user is banned from the guild. Returns `true` or `false`.

## Usage

```bash
$isBanned[userID]
```
1. **userID** - The ID of the user to check if it's banned.

## Example

#### Using $isBanned

How to use $isBanned

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $isBanned[123456789123456789]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        false
    </discord-message>
</discord-messages>

##### Related functions: [$kick](../Member/kick.md) [$ban](../Member/ban.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="ban" vertical="middle" /> <Badge type="tip" text="punish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" /> <Badge type="tip" text="moderator" vertical="middle" />