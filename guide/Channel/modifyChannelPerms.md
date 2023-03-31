# $modifyChannelPerms
Modifies permissions for a channel. Also works for categories.

#### Usage: 
`$modifyChannelPerms[channelID;+perm1;-perm2;/perm3;+perm4;...;roleID/userID]`

#### Example:
`$modifyChannelPerms[$channelID;-sendmessages;$roleID[muted]]`
This command will restrict members with the role "muted" from speaking.


:::tip Information
Use `+` to grant a permission;

Use `-` to deny a permission;

Use `/` to set a permission to neutral.
:::

::: tip Permissions
[This list](../CodeReferences/ref.permissions_list.md) contains a list of all permissions.
:::

::: tip Related Functions
[$editChannel](../Channel/editChannel.md) can be used to modify a channel.
:::


##### Function Difficulty: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="modify" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" /> 
