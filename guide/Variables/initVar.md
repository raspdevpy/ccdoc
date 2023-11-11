# $initVar

initializes a variable with a default value if the var is undefined or does not exist

## Usage

```bash
$initVar[server/message/channel/user;varname;Defaultvalue;id(optional)]
```

### Example (Server Var):
```bash
$initVar[server;totalPolls;0]


```

### Example (Channel Var):
```bash
$initVar[channel;ticket-owner;$authorID;$channelID]


```

### Example (User Var):
```bash
$initVar[user;money;0;$userID]


```

### Example (Message Var):
```bash
$initVar[message;reactions;0;$messageID]
```