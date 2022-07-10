# $createThread <Badge type="warning" text="Read Below" vertical="middle" />
Create a thread, corresponding to the messageID specified in the function
#### Usage: 
`$createThread[Channel ID;Message ID;Thread Name;Reason;Duration (1h/1d/3d/7d)(optional);Return ID (yes/no)(optional)]`

#### Example:
`$createThread[$channelID;$messageID;Expample]`
will create a thread on the executed message

::: danger
You can only use the durations, allowed by your boosting level! Please do not try to use `7d` if your server hasn't got level 3 boosting perks
:::

::: tip Related Functions
[$createChannel](../Channel/createChannel.md), create a channel

[$createRole](../Role/createRole.md), create a role
:::

::: tip
This Command supports Curl Arguments, a link to the page explaining it, will get added when done
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="Threads" vertical="middle" /> <Badge type="tip" text="Create Threads" vertical="middle" />