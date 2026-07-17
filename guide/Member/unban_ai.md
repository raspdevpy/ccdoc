# $unban

Unbans a user from the server.

## Usage

```bash
$unban[userID/username;reason]
```
1. **userID/username** - The ID or username of user to unban.
2. **reason** - (Optional) default value: (none). The reason for the unban. You can see this in Audit Log.

## Example

#### Using $unban

How to unban user with a reason

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $unban[123456789123456789;Appeal successful]
    </discord-message>
</discord-messages>

::: tip Permissions
Make sure that the bot does have sufficient permission.
:::

##### Related functions: [$kick](../Member/kick.md) [$ban](../Member/ban.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="unban" vertical="middle" /> <Badge type="tip" text="unpunish" vertical="middle" /> <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="moderation" vertical="middle" />