# $hasAnyPerm - Check for Multiple Permissions

This function checks if a specified user, or the message author, possesses *at least one* of the provided permissions. Think of it like asking: "Does this user have *any* of these permissions?"

## Usage

There are two ways to use `$hasAnyPerm`:

**1. Checking the Message Author:**

```bash
$hasAnyPerm[permission1;permission2;...]
```

   *   In this format, the function checks if the *message author* has at least one of the listed permissions.

**2. Checking a Specific User:**

```bash
$hasAnyPerm[userID;permission1;permission2;...]
```

   *   Here, you specify the `userID` of the user you want to check. The function then verifies if that user has at least one of the listed permissions.

## Parameters

*   `userID` (Optional): The ID of the user you want to check. If omitted, the function checks the message author.
*   `permission1;permission2;...`: A semicolon-separated list of Discord permissions.

## Example

```
$hasAnyPerm[$authorID;manageroles;managechannels]
```

This example checks if the message author (represented by `$authorID`) has either the `manageroles` permission *or* the `managechannels` permission (or both).  It returns `true` if either is true, and `false` only if *neither* are true.

Another example, targeting a specific user:

```
$hasAnyPerm[678901234567890123;kick;ban]
```

This example checks if the user with ID `678901234567890123` has either the `kick` permission *or* the `ban` permission (or both).

## Understanding the Result

The `$hasAnyPerm` function will return:

*   `true`: If the user has at least one of the specified permissions.
*   `false`: If the user does not have any of the specified permissions.

## Permissions List

For a comprehensive list of available Discord permissions and their corresponding codes, please refer to this resource: [Permissions List](../CodeReferences/ref.permissions_list.md). Understanding the correct permission codes is essential for using this function effectively.