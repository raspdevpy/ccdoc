# $moveUser

Moves a user to a different voice channel, or disconnects them from their current voice channel.

## Usage

```bash
$moveUser[userID;channelID;reason]
```
1. **userID** - The ID of user to be moved.
2. **channelID** - (Optional) default: disconnect user. The channel where to move the user. If none provided, the user will be disconnected.
3. **reason** - (Optional) default value: (empty). Reason for move or disconnect. You can see this in Audit Log.

## Examples

#### Moving user to a channel

How to move user to another channel

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $moveUser[123456789123456789;123456789987654321;AFK]
    </discord-message>
</discord-messages>

#### Disconnecting user from a channel

How to diconnect user from a channel

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $moveUser[123456789123456789;;AFK]
    </discord-message>
</discord-messages>

::: tip Permission
Make sure that the bot does have enough permission to move or disconnect members. The bot also needs to be higher in the role hierarchy.
:::

##### Related functions: [$vcBefore](../Channel/vcBefore.md) [$vcAfter](../Channel/vcAfter.md)

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle"/>
###### Tags: <Badge type="tip" text="voice" vertical="middle"/> <Badge type="tip" text="move" vertical="middle"/>