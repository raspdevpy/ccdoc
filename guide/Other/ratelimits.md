# Discord Rate Limits
Rate Limits prevents misleading usage or abuse of the API. Our Bot receives a lot of requests, that's why we have decided to use our own cooldown system.

## Function Cooldown
Many functions have a **cooldown** — time until next execution is possible for the same data input/user/place (e.g. channel or guild).

The Bot acts differently if a called function is on cooldown:
* waits for cooldown to pass, then execute
* sends an error message
* cancels the execution without warning.

::: tip
You can see the cooldown (if any) of a function by using the command `!!func function name`.
:::

## Function Limit
The same function with cooldown can only be called **5 times in the code**.<br/>
If the function limit is reached, the bot cancels the execution of the function without warning.

## Execution Limits
The Bot supports up to **5 parallel executions** of the same custom command.

## Execution Cooldown
The same custom command can only be triggered **once in 5 seconds**.

# Premium
Tier 3/4/5 allows you to run your own bot. That's why limitations are removed. Your Bot runs isolated in a separate process.
Following Limits are removed:
* Function Cooldown
* Function Limit hard capped to 20 calls
* Execution Limits hard capped to 60 parallel executions
* Execution Cooldown hard capped to 0.5 seconds
