# $editTrigger

Edit a command information like `name` or `type`\
\
Editable types: name, runonlyin, ignorerole,  type, trigger, channelused, minperms, time

## Usage

```bash
$editTrigger[InfoType;New value;Token (optional)]
```

### Example:
```bash
$editTrigger[name;Edited Name]
```

### Change Timed Trigger Time
you change the trigger time, with `time` as type, and value to be the timestamp (in ms) of the next trigger time, make sure it's a time in future

Example (Set the time to trigger after 10s)
```bash
$editTrigger[time;$math[$timestamp+10000];$token]
```