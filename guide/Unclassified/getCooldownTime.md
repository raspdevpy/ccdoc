# $getCooldownTime

To get the cooldown time left set by $cooldown.\
.\
 in millisecond.

## Usage

```bash
$getCooldownTime[time (i.e 10m);type (i.e server);id (in case of user id or channel id)]
```

### Example:
```bash
$if[$getCoolDownTime[10m;server]!=0]
    $interactionReply[You can't use this!]
    $stop
$else
    $servercooldown[10m]
$endIf
... REST OF CODE
```