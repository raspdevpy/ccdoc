# $hasAnyRole

Checks if a user has one of the given roles. Returns `true` or `false`.

## Usage

```bash
$hasAnyRole[userID;roleID1;roleID2;...]
```
1. **userID** - (Optional) default value: `$authorID`. If not included or left empty, $authorID will be used.
2. **role N** - You can add as many roles as needed.

## Example

#### Using $hasAnyRole

How to use $hasAnyRole without user argument. Keep in mind that if the user does have only one of listed roles, true will be returned.

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec I have Admin OR Manager role: $hasAnyRole[admin;manager]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        I have Admin OR Manager role: true
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec I have Admin role: $hasAnyRole[admin], I have Manager role: $hasAnyRole[manager]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        I have Admin role: true, I have Manager role: false
    </discord-message>
</discord-messages>

::: tip Suggestion
To make code stop if the user doesn't have the needed role, you can check out [$onlyIf](../Text/only/onlyIf.md). For multiple actions, check [$if](../Text/Condition/if.md).
:::

##### Related functions: [$hasPerms](../Member/hasPerms.md) [$hasAnyPerm](../Member/hasAnyPerm.md) [$hasRole](../Role/hasRole.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="roles" vertical="middle"/> <Badge type="tip" text="management" vertical="middle"/>