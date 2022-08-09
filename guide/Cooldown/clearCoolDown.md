# $clearCoolDown

Clear cooldown set by $cooldown functions\
\
Type can be: user, channel, server

## Usage

```bash
$clearCoolDown[type (optional, default user);id (optional, default "$authorID")]
```

### Example (cooldown exception for specific user):
```bash
$cooldown[1m;You are in cooldown because you are not mido]
$if[$username==Mido]
	$clearCooldown[user;$authorID]
$endIf
```