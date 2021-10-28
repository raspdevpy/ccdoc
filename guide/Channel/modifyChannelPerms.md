# $modifyChannelPerms
Modifies the permissions from a channel. Can also be used to modify the perms from a **category**

#### Usage: 
`$modifyChannelPerms[channelID;+perm1;-perm2;/perm3;+perm4;...;roleID/userID]`

#### Example:
`$modifyChannelPerms[$channelID;-sendmessages;$roleID[muted]]`
this will disable members with the role "muted" from speaking


:::tip Information
Use a `+` sign to grand permission for a certain key;

Use `-` to deny a permission for a certain key;

Use `/` to reset a permission for a certain key.
:::

::: tip Permissions
Check this [list](../CodeReferences/ref.permissions_list.md) to view all permissions names
:::

::: tip Related Functions
[$editChannel](../Channel/editChannel.md), to edit channel's names or category
:::


##### Function Difficultly: <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="modify" vertical="middle" /> <Badge type="tip" text="edit Channel" vertical="middle" /> <Badge type="tip" text="modify Channel" vertical="middle" /> 