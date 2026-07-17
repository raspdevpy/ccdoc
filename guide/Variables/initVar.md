# $initVar

Initializes a variable with a default value if the var is undefined or does not exist

## Usage

```bash
$initVar[type;varname;Default Value;Custom ID (optional)]
```

### Allowed Types
server, message, channel, user

### Custom ID
* For type 'message', it will be the message id.
* For type 'channel', it will be the channel id.
* For type 'user', it will be the user id.

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