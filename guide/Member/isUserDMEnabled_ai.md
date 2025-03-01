# $isUserDMEnabled

This function determines if a specific user has direct messages (DMs) enabled. It returns `true` if DMs are enabled, and `false` otherwise.

## Syntax

```bash
$isUserDMEnabled
$isUserDMEnabled[userID]
```

## Parameters

*   **`userID` (Optional):** The ID of the user you want to check.  If no `userID` is provided, it checks if DMs are enabled for the current user invoking the command (i.e., the user who ran the command).

## Functionality

This function attempts to retrieve information about whether a user has direct messaging enabled.

*   **Without a `userID`:** It checks if the user executing the current command has direct messages enabled.
*   **With a `userID`:**  It checks if the specified user (by their ID) has direct messages enabled.

## Returns

*   **`true`:** If the user has DMs enabled.
*   **`false`:** If the user has DMs disabled or if the user is not found.

## Examples

**Example 1: Check if the command user has DMs enabled:**

```bash
$isUserDMEnabled
```

**Example 2: Check if a specific user (with ID 1234567890) has DMs enabled:**

```bash
$isUserDMEnabled[1234567890]
```

**Explanation:**

In the second example, replace `1234567890` with the actual ID of the user you want to check.  The function will then return `true` or `false` depending on whether that user has DMs enabled.

**Important Notes:**

*   User privacy settings can affect the accuracy of this function.  If a user has highly restrictive privacy settings, the bot might not be able to determine whether their DMs are enabled.