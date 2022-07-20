# $awaitMessage

Awaits a message from given user ID or everyone in this channel, and return it

## Usage

```bash
$awaitMessage[MESSAGE (Optional);userid / everyone (optional, default everyone);timeout after (default and max:(60 x bot tier) seconds); return message id instead of content (yes/no)]
return the user reply or undefined
```

### Ex:
Your answer is: $awaitMessage[Are you tall?;$authorID]