# $clearCooldown

Clears a cooldown set by cooldown function.

**Type:** Clears or resets a pre-existing cooldown.

## Usage

```bash
$clearCooldown[type;id]
```
1. **type** - (Optional) default value: `user`. Can be `user`, `channel` or `server`. The type of cooldown to clear.
2. **id** - (Optional) default value: `$authorID` if type is user. The ID of a user or channel to clear cooldown from.

## Example

#### Remove cooldown from a user

How to remove cooldown from a user

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $cooldown[5m]<br>
        $clearCooldown<br>
        No cooldown
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        No cooldown
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $cooldown[5m]<br>
        $clearCooldown<br>
        No cooldown 2nd try
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        No cooldown 2nd try
    </discord-message>
</discord-messages>

##### Related functions: [$getCooldownTime](../Cooldown/getCooldownTime.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="Cooldown" vertical="middle"/> <Badge type="tip" text="Clear Cooldown" vertical="middle"/>