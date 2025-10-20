# $createThread <Badge type="warning" text="Read Below" vertical="middle" />
Create a thread, corresponding to the messageID specified in the function
#### Usage: 
`$createThread[Channel ID;Message ID;Thread Name;Reason;Duration (1h/1d/3d/7d)(optional);Return ID (yes/no)(optional);Private Thread? (yes/no)]`

#### Example (Create Thread on user message):
```bash
$createThread[
    {channel=$channelID}
    {message=$messageID}
    {name=Example}
]
```

#### Example (Create A private thread):
```bash
$createThread[
    {channel=$channelID}
    {message=$messageID}
    {name=Example}
    {private=yes}
]
```

::: tip Related Functions
[$createChannel](../Channel/createChannel.md), create a channel

[$createRole](../Role/createRole.md), create a role
:::

::: tip
This Command supports Curl Arguments, a link to the page explaining it, will get added when done
:::

##### Function difficulty <Badge type="danger" text="Difficult" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" /> <Badge type="tip" text="Threads" vertical="middle" /> <Badge type="tip" text="Create Threads" vertical="middle" />
