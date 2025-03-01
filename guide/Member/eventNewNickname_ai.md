# $eventNewNickname

Retrieves the new nickname of a member when their nickname is updated within a server. This function is specifically useful in the Nickname Update trigger.

## Description

The `$eventNewNickname` function returns the new nickname that a user has set for themselves.  It can only be used inside a Nickname Update event.

## Usage

```markdown
$eventNewNickname
```

## Example

Imagine you have a command triggered by a Nickname Update event that logs the new nickname to a channel:

```
$sendMessage[User $username changed their nickname to $eventNewNickname!]
```

In this example:

*   `$username` would resolve to the username of the member who changed their nickname.
*   `$eventNewNickname` would resolve to the **new** nickname they set.
