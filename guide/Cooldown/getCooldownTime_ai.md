# $getCooldownTime

Returns remaining time of a cooldown in miliseconds.

## Usage

```bash
$getCooldownTime[time;type;id]
```
1. **time** - (Optional) default value: (last cooldown set). The time your cooldown was set to.
2. **type** - (Optional) default value: `user`. Can be `user`, `channel` or `server`. The type of cooldown to return remaining time of.
3. **id** - (Optional) default value: `$authorID` if type is user. The ID of a user or a channel to check cooldown from.

## Example

#### Using $getCooldownTime

How to use $getCooldownTime

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $channelCooldown[5m]<br>
        $getCooldownTime[5m;channel;$channelID]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        299937
    </discord-message>
</discord-messages>

::: warning Note
The `time` argument in must exactly match the time in the original cooldown function used. Mismatched durations will result in incorrect cooldown checks.
:::

##### Related functions: [$clearCooldown](../Cooldown/clearCooldown.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="Tag1" vertical="middle"/> <Badge type="tip" text="Tag2" vertical="middle"/>