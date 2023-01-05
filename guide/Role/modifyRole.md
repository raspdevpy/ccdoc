# $modifyRole
Modifies the permissions from a role. 

#### Usage: 
`$modifyRole[roleID;name (optional);color (optional);mentionable(yes/no, optional);hoisted(yes/no, optional);position (optional)]`

#### Example:
`$modifyRole[$roleID[moderators]];;#666666;yes;yes]`
This will edit the color of the mod role

::: tip Used Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it
:::

::: tip Related Functions
[$editChannel](../Channel/editChannel.md), to modify the name or category from a channel

[$modifyRolePerms](../Role/modifyRolePerms.md), to modify the role's perms
:::


##### Function difficulty: <Badge type="tip" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="modify role" vertical="middle" /> <Badge type="tip" text="edit role" vertical="middle" /> <Badge type="tip" text="change role name" vertical="middle" /> 