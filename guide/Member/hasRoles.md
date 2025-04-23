# $hasRoles

Checks if user has all of the given roles. Returns `true` or `false`.

## Usage:

```bash
$hasRoles[userID;role1;role2;...]
```
1. **userID** - User you want to check for roles.
2. **role N** - You can add as many roles as needed.

## Example

#### Using $hasRoles

How to use $hasRoles. Keep in mind that only if the user does have all of listed roles, true will be returned.

<discord-messages>
	<discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
		!!exec $hasRoles[$authorID;123456789123456789]
	</discord-message>
	<discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
		true
	</discord-message>
</discord-messages>

::: tip Suggestion
To make code stop if the user doesn't have the needed role, you can check out [$onlyIf](../Text/only/onlyIf.md). For multiple actions, check [$if](../Text/Condition/if.md).
:::

##### Related functions: [$hasAnyPerm](../Member/hasAnyPerm.md) [$hasPerms](../Member/hasPerms.md) [$hasAnyRole](../Member/hasAnyRole.md)

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle"/>
###### Tags: <Badge type="tip" text="roles" vertical="middle"/> <Badge type="tip" text="management" vertical="middle"/>