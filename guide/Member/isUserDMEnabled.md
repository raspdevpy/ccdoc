# $isUserDMEnabled

This function checks if a  user has direct messages (DMs) enabled. It returns `true` if DMs are enabled, and `false` if not.

## Usage

```bash
$isUserDMEnabled[userID]
```
1. **userID** - (Optional) default value: `$authorID`. The ID of the user you want to check.

## Example

#### Using $isUserDMEnabled

How to use $isUserDMEnabled

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $isUserDMEnabled[123456789123456789]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        true
    </discord-message>
</discord-messages>

##### Related functions: [$dm](../Message/DM.md) [$sendDM](../Message/sendDM.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="dm" vertical="middle"/> <Badge type="tip" text="direct message" vertical="middle"/>