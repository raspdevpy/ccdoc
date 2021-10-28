# Discord Raidlimits

Our bot is unique in it's sort. 
But sadly we aren't quite big enough yet, to get our raidimits decreased! 
Regarding to this, we sadly have to add cooldowns to functions and command executions. This to prevent a punishment from Discord Inc.

Sadly this does has some consequences, the first one, is probably the most annoying...

### Function cooldown

This means, functions can only be used 1 time per X amount of time... This is user based, so if a user uses `$editMessage`, it can be used after 1m again by the same user...

### Command Executions

To prevent our bot, from getting spammed, raided or banned, we have included some restrictions:

* For non-premium users, 1 trigger can only trigger 1 command. Example below
* For non-premium users, 1 command can only be executed once per 2 seconds. Example below

#### Examples:

> For non-premium users, 1 trigger can only trigger 1 command.

If my trigger for custom command 1 is `!help`

And my trigger for custom command 2 is also `!help`

1 of the custom commands will get ignored!


> For non-premium users, 1 command can only be executed once per 2 seconds.

If I'm a very annoying server member, and I spam my very fancy `!help` command, he/she/it will get an error when it's going to fast! 