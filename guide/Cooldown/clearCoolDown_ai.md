# $clearCooldown

Clears a cooldown set by the `$cooldown` function. This allows you to bypass or reset cooldowns for specific users, channels, or servers.

**Type:** Clears or resets a pre-existing cooldown.

## Usage

```bash
$clearCooldown[type (optional, default: user); id (optional, default: "$authorID")]
```

**Parameters:**

*   **`type` (Optional):**  Specifies the scope of the cooldown to clear. Can be one of the following:
    *   `user`: Clears the cooldown for a specific user. (Default)
    *   `channel`: Clears the cooldown for the current channel.
    *   `server`: Clears the cooldown for the current server.
*   **`id` (Optional):** Specifies the ID of the user, channel, or server to clear the cooldown for.  Defaults to `$authorID` (the user who triggered the command) if no ID is provided.

## Example: Cooldown Exception for a Specific User

This example demonstrates how to set a cooldown for everyone *except* a specific user.  The user "Mido" will be exempt from the cooldown.

```bash
$cooldown[1m;You are in cooldown because you are not Mido]
$if[$username==Mido]
    $clearCooldown[user;$authorID]
$endIf
```

**Explanation:**

1.  **`$cooldown[1m;You are in cooldown because you are not Mido]`**: This line sets a 1-minute cooldown for all users executing the command. The message "You are in cooldown because you are not Mido" will be displayed if a user tries to use the command within the cooldown period.
2.  **`$if[$username==Mido]`**: This checks if the username of the user executing the command is "Mido".
3.  **`$clearCooldown[user;$authorID]`**: If the username is "Mido", this line clears the cooldown specifically for that user (`$authorID`).  This means Mido can bypass the 1-minute cooldown.
4.  **`$endIf`**: Closes the `$if` statement.

In summary, this example sets a general cooldown but then removes it for the user "Mido", allowing them to use the command without waiting.