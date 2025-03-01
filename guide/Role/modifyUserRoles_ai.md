# `$modifyUserRoles`

This function allows you to modify a user's roles by adding, removing, or toggling them. You can perform multiple operations in a single function call.

**Operations (op):**

*   `+`:  **Add** the specified role.
*   `-`:  **Remove** the specified role.
*   `~`:  **Toggle** the role (add if the user doesn't have it, remove if they do).

## Usage

```bash
$modifyUserRoles[User ID;[op]Role 1;[op]Role 2;...]
```

**Parameters:**

*   **`User ID`**: The ID of the user whose roles you want to modify.
*   **`[op]Role N`**:  A series of role modifications. Each modification consists of an *operation* (`+`, `-`, or `~`) followed by the *role name or ID*.  Separate each role modification with a semicolon (`;`).

## Example

Let's say you want to add the "VIP" role and remove the "Newbie" role from a user. Here's how you would do it:

```bash
$modifyUserRoles[$authorID;+VIP;-Newbie]
```

In this example:

*   `$authorID` represents the ID of the message author (the user whose roles you want to modify).
*   `+VIP` adds the "VIP" role to the user.
*   `-Newbie` removes the "Newbie" role from the user.