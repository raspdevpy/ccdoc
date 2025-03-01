# $eventOldNickname

Retrieves the previous nickname of a member when they update their nickname. This event trigger is only available within the Nickname Change event.

## Description

The `$eventOldNickname` expression returns the nickname a member had *before* they changed it.  If the member didn't have a nickname prior to the change, it will return `` (empty).

## Syntax

```
$eventOldNickname
```

## Usage Notes

*   This expression is only valid within the Nickname Change event.
*   If the member had no nickname before the change, this will return `` (empty). To handle this, you can use conditional statements.

## Example

To send a message to a channel displaying the member's previous and current nicknames:

```markdown
$sendMessage[Nickname changed!
User: $mention
Old Nickname: $eventOldNickname
New Nickname: $eventNickname]
```

This example sends a message to the specified channel showing who changed their nickname, and what their old and new nicknames are.  If they didn't have a previous nickname, it will display "Old Nickname: ".