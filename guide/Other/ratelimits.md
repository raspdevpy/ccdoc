# Discord Ratelimits
Ratelimits prevents misleading usage or abuse.Discord ratelimits are a way to prevent abuse of the API.Our Bot receives a lot of request,thats why we have decided to use our own cooldown system.

## Function Cooldown
Every function has a cooldown, this is how long the bot will wait before or abort the execution of the function.
You can retrieve the cooldown of a function by using the command !!func `fname` .

## Function Limit
Functions with cooldowns can only be called 4 times in the code.

## Execution Limits
The Bot supports up to 6 parallel executions of a custom command.

## Execution Cooldown
There is a global cooldown for all custom commands.
The Executor can only trigger command every 4 seconds.

# Premium
Tier 3/4/5 allows you to run your own bot.Thats why limitations are removed.Your Bot runs isolated in a seperate process.
Following Limits are removed:
* Function Cooldown
* Function Limit hardcapped to 20 calls
* Execution Limits hardcapped to 60 parallel executions
* Execution Cooldown hardcapped to 0.5 seconds 