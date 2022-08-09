# $getCooldownTime

To get the cooldown time left set by $cooldown functions in millisecond.\
\
Type can be: user, channel, server

## Usage

```bash
$getCooldownTime[time (i.e 10m);type (i.e server);id (in case of user id or channel id)]
```

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