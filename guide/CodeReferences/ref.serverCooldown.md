# `$serverCooldown` Code Reference

This page explains how to use the `$serverCooldown` function in your Discord bot commands. This function helps prevent users from rapidly executing a command, often used for features like boosting or claiming rewards.

*(You can always return to the main Server Cooldown page by clicking [this](../Useful/serverCooldown.md) link)*

---

**Example Usage:**

This example demonstrates how to use `$serverCooldown` to limit how frequently a user can claim a booster reward.

```bash
$serverCooldown[2h;❌ - You can't boost again yet! Please try again in %time%]

$sendMessage[Good morning, I have given you your reward for bumping!]

$giveRoles[$authorID;$roleID[Booster]]
```

**Explanation:**

*   **`$serverCooldown[2h;❌ - You can't boost again yet! Please try again in %time%]`**: This is the core of the cooldown.
    *   **`2h`**: This sets the cooldown duration to 2 hours. The user cannot execute this command again within this timeframe.
    *   **`❌ - You can't boost again yet! Please try again in %time%]`**: This is the message displayed to the user if they try to use the command before the cooldown expires.
        *   **`❌`**: Represents a cross emoji, indicating an error.
        *   **`%time%`**:  This is a placeholder that will be automatically replaced with the remaining time until the cooldown expires (e.g., "1 hour 30 minutes").

*   **`$sendMessage[Good morning, I have given you your reward for bumping!]`**:  This sends a success message to the user if the cooldown has expired and they are allowed to execute the command.

*   **`$giveRoles[$authorID;$roleID[Booster]]`**: This gives the user the "Booster" role.
    *   **`$authorID`**: Refers to the ID of the user who executed the command.
    *   **`$roleID[Booster]`**:  Retrieves the ID of the role named "Booster." Make sure a role with this name exists on your server.

---

**Used Functions (Click for detailed documentation):**

*   **`$giveRoles`**:  [Link to `$giveRoles` documentation](../Role/giveRoles.md) -  Assigns a specified role to a user.
*   **`$roleID`**:  [Link to `$roleID` documentation](../Role/roleID.md) -  Retrieves the ID of a role based on its name.

**Key Takeaways:**

*   Use `$serverCooldown` to prevent command spam and manage resource usage.
*   Customize the error message to provide clear instructions to users.
*   Ensure you have a role named "Booster" (or change the `roleID` accordingly) if you're using the provided example.
*   The `%time%` placeholder provides a dynamic and informative message to users on cooldown.