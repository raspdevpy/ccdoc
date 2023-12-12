# $getCooldownTime

To get the cooldown time left set by cooldown related functions (i.\
e $cooldown) in millisecond.\
\
Type can be: user, channel, server

## Usage

```bash
$getCooldownTime[time (i.e 10m);type (i.e server);id (in case of user id or channel id);command token (optional)]
```

### Return:
This function return time in millisecond, if no cooldown it will return `0` instead

### Note on `Command Token` Input:
Its useful to return cooldown time for another command, by specifying the token of that command.

### Example:
```bash
$if[$getCoolDownTime[10m;server]!=0]
    $interactionReply[You can't use this, this command is globally on cooldown]
    $stop
$else
    $servercooldown[10m]
$endIf
... REST OF CODE
```