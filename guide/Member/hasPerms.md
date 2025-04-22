# $hasPerms

Checks if user has all of the given permissions. Returns `true` or `false`.

## Usage:

```bash
$hasPerms[userID;perm1;perm2;...]
```
1. **userID** - User you want to check for permissions.
2. **perm N** - You can add as many permissions as needed. The available permissions are here: [Permissions List](../CodeReferences/ref.permissions_list.md).

## Example

#### Using $hasPerms

How to use $hasPerms. Keep in mind that only if the user does have all of listed permissions, true will be returned.

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $hasPerms[$authorID;sendmessages]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        true
    </discord-message>
</discord-messages>

::: tip Suggestion
To make code stop if the user doesn't have the needed permission, you can check out [$onlyIf](../Text/only/onlyIf.md). For multiple actions, check [$if](../Text/Condition/if.md).
:::

##### Related functions: [$hasAnyPerm](../Member/hasAnyPerm.md) [$hasAnyRole](../Member/hasAnyRole.md) [$hasRole](../Role/hasRole.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="permission" vertical="middle"/> <Badge type="tip" text="management" vertical="middle"/>