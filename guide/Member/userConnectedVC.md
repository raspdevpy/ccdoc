# $userConnectedVC

Returns the ID of a voice channel the user is currently connected to.

## Usage

```bash
$userConnectedVC[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of a user you want to return voice channel they are connected to.

## Example

#### Is connected to a voice channel

What happens if user is connected to a voice channel

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userConnectedVC
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        123456789987654321
    </discord-message>
</discord-messages>

#### Is not connected to a voice channel

What happens if user is not connected to a voice channel

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $userConnectedVC
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        undefined
    </discord-message>
</discord-messages>

##### Related functions: [$vcBefore](../Channel/vcBefore.md) [$vcAfter](../Channel/vcAfter.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="voice" vertical="middle"/> <Badge type="tip" text="connected" vertical="middle"/>