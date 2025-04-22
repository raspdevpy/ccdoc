# $muteUser

Mutes or unmutes a user in a voice channel.

## Usage

```bash
$muteUser[userID;mute;reason]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of user to mute
2. **mute** - Can be `yes` or `no`. Yes for mute, no for unmute.
3. **reason** - (Optional) default value: `Muted by CC command` if mute is yes, `UnMuted by CC command` if mute is no. Reason for mute/unmute. You can see this in Audit Log.

## Example

#### Muting a member

How to mute a member with reason

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $muteUser[123456789123456789;yes;AFK]
    </discord-message>
</discord-messages>

#### Unmuting a member

How to unmute a member with reason

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $muteUser[123456789123456789;no;Not AFK]
    </discord-message>
</discord-messages>

::: tip Permission
Make sure that the bot does have enough permission to mute or unmute members. The bot also needs to be higher in the role hierarchy.
:::

##### Related functions: [$vcBefore](../Channel/vcBefore.md) [$vcAfter](../Channel/vcAfter.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="voice" vertical="middle"/> <Badge type="tip" text="mute" vertical="middle"/>