# $editThread <Badge type="warning" text="Read Below" vertical="middle" />
Edit a Thread.

#### Usage: 
`$editThread[Channel ID;Thread ID;Thread Name;Archived (yes/no);duration (1h/1d/3d/7d)(optional);Slowmode;Locked (yes/no)]`

#### Example: 
`$editThread[$channelID;$getServerVar[threadID];Cat Discussion;yes]` Will edit the thread stored in the server var "threadID"


::: danger
You can only use the durations, allowed by your boosting level! Please do not try to use `7d` if your server hasn't got level 3 boosting perks
:::

::: tip
This Command supports Curl Arguments, a link to the page explaining it, will get added when done
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="Threads" vertical="middle" /> <Badge type="tip" text="Edit Threads" vertical="middle" />