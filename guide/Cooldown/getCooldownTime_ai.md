# $getCooldownTime

Retrieves the remaining cooldown time, in milliseconds, set by the `$cooldown` function. This allows you to check if a user, channel, or server is still subject to a cooldown.

**Type** specifies the scope of the cooldown and can be one of the following: `user`, `channel`, or `server`.

## Usage

```
$getCooldownTime[time;type;id]
```

*   **`time`**:  The cooldown duration specified in the `$cooldown` function (e.g., `10m` for 10 minutes). This *must* match the original `$cooldown` duration for the function to work correctly.
*   **`type`**: The scope of the cooldown: `user`, `channel`, or `server`.
*   **`id`**:  Required only when `type` is `user` or `channel`. Specify the user ID or channel ID respectively.  Leave empty if `type` is `server`.

## Example

This example demonstrates how to check if a command is on server-wide cooldown before executing it.

```
$if[$getCoolDownTime[10m;server]!=0]
    $interactionReply[You can't use this, this command is globally on cooldown.]
    $stop
$else
    $servercooldown[10m]
    $interactionReply[Command executed!]
    ... REST OF CODE
$endIf
```

**Explanation:**

1.  **`$if[$getCoolDownTime[10m;server]!=0]`**: This checks if the remaining server cooldown time for a cooldown originally set for `10m` is *not* equal to 0.  If it's not 0, it means the cooldown is still active.
2.  **`$interactionReply[You can't use this, this command is globally on cooldown.]`**:  If the cooldown is active, the bot sends a reply indicating that the command cannot be used.
3.  **`$stop`**:  Stops further execution of the command since it's on cooldown.
4.  **`$else`**:  If the cooldown time is 0 (meaning the cooldown has expired).
5.  **`$servercooldown[10m]`**: Sets a new server-wide cooldown for `10m`.
6.  **`$interactionReply[Command executed!]`**: Confirms command execution and signifies the start of any other code logic.
7.  **`... REST OF CODE`**: Represents the remaining code of the command, which will only execute if the cooldown has expired and is now reapplied.

**Important Considerations:**

*   The `time` argument in `$getCooldownTime` must exactly match the `time` argument in the original `$cooldown` function.  Mismatched durations will result in incorrect cooldown checks.
*   When using `user` or `channel` cooldowns, ensure you provide the correct `id`.
*   `$getCooldownTime` returns the remaining cooldown time in milliseconds. You can use mathematical operations or formatting functions to convert it to more human-readable formats (e.g., seconds, minutes).