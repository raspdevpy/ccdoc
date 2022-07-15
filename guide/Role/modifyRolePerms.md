# $modifyRolePerms
Modifies the permissions from a role. 

#### Usage: 
`$modifyRolePerms[roleID;+perm1;-perm2;/perm3;+perm4;...]`

#### Example:
`$modifyRolePerms[$roleID[muted];-sendmessages;]`
this will modify the perms of the role muted, to not be able to send messages

::: tip Permissions
Check this [list](../CodeReferences/ref.permissions_list.md) to view all permissions names
:::
::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it
:::

::: tip Related Functions
[$modifyChannelPerms](../Channel/modifyChannelPerms.md), to modify the perms of a channel

[$modifyRole](../Role/modifyRole.md), to edit the role's name or color
:::

:::tip Information
Use a `+` sign to grand permission for a certain key;

Use `-` to deny a permission for a certain key;

Use `/` to reset a permission for a certain key.
:::

##### Function difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="modify" vertical="middle" /> <Badge type="tip" text="modify role" vertical="middle" /> <Badge type="tip" text="edit role" vertical="middle" /> <Badge type="tip" text="change role perms" vertical="middle" /> 