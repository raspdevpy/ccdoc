# $isBanned

Checks if a specific user is banned from the current guild.

## Syntax

```bash
$isBanned[userID]
```

## Parameters

*   `userID` - The ID of the user to check. This parameter is **required**.

## Returns

*   `true` - If the user is banned from the guild.
*   `false` - If the user is not banned from the guild or the user ID is invalid.

## Example

```markdown
$if[$isBanned[543210987654321098]==true]
  This user is banned!
$else
  This user is not banned.
$endif
```

**Explanation:**

This example checks if the user with the ID `543210987654321098` is banned from the current guild.  If `$isBanned` returns `true`, the bot will respond with "This user is banned!". Otherwise, it will respond with "This user is not banned."

## Notes

*   Ensure the bot has the necessary permissions to view ban information.
