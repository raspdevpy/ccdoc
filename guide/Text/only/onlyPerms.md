# $onlyPerms
Only if user has the given permssions,they will be able to execute this command

#### Usage: `$onlyPerms[perm;perm;...;error message]`

#### Example: `$onlyPerms[managemessage;:x: -  You don't have manage message permission]`

::: danger
Use this code, on the FIRST line of your code! If you do not, it will execute all code before this line and not after!
:::

::: tip Permissions
Check this [list](../../CodeReferences/ref.permissions_list.md) to view all permissions names
:::

::: tip Note
You can send embed using [Message Curl Format](../../CodeReferences/ref.message_curl_format.md)
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Only If" vertical="middle" /> <Badge type="tip" text="perms restrictions" vertical="middle" /> <Badge type="tip" text="Only Execute if" vertical="middle" />