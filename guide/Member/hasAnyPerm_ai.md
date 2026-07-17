# $hasAnyPerm

Checks if a user has one of the given permissions. Returns `true` or `false`.

## Usage

```bash
$hasAnyPerm[userID;permission1;permission2;...]
```
1. **userID** - (Optional) default value: `$authorID`. If not included or left empty, $authorID will be used.
2. **permission N** - You can add as many permissions as needed. The available permissions are here: [Permissions List](../CodeReferences/ref.permissions_list.md).

## Example

#### Using $hasAnyPerm

How to use $hasAnyPerm without user argument. Keep in mind that if the user does have only one of listed permissions, true will be returned.

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec I have managechannels OR manageroles permission: $hasAnyPerm[managechannels;manageroles]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        I have managechannels OR manageroles permission: true
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec I have managechannels permission: $hasAnyPerm[managechannels], I have manageroles permission: $hasAnyPerm[manageroles]
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        I have managechannels permission: true, I have manageroles permission: false
    </discord-message>
</discord-messages>

::: tip Suggestion
To make code stop if the user doesn't have the needed permission, you can check out [$onlyIf](../Text/only/onlyIf.md). For multiple actions, check [$if](../Text/Condition/if.md).
:::

##### Related functions: [$hasPerms](../Member/hasPerms.md) [$hasAnyRole](../Member/hasAnyRole.md) [$hasRole](../Role/hasRole.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="permission" vertical="middle"/> <Badge type="tip" text="management" vertical="middle"/>