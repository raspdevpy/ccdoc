# `$lowestRole`

Returns the user's lowest role in the current guild. You can specify a user ID, or if omitted, it will use the command executor (the user who ran the command).  "Lowest" refers to the role with the lowest position in the server's role hierarchy (typically, the role created first).

#### Usage:

*   `$lowestRole[userID]` - Returns the lowest role for the user with the specified `userID`.
*   `$lowestRole` - Returns the lowest role for the user who executed the command.

<br/>

**Example:**

This example retrieves the role ID of the user's lowest role and displays it.

```discord
!!exec $roleName[$lowestRole]
```

**Explanation:**

*   `!!exec` is used to execute a custom command.
*   `$lowestRole` retrieves the lowest role of the command executor.
*   `$roleName` retrieves the ID of the role obtained from `$lowestRole`.

**Discord Output:**

```discord
Member
```

(The bot will output the role ID of the user's lowest role. This example only provides a placeholder "Member".)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Role" vertical="middle" /> <Badge type="tip" text="Get Lowest Role" vertical="middle" /> <Badge type="tip" text="Role Hierarchy" vertical="middle" />