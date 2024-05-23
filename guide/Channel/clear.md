# $clear

Clears an amount of messages from given channel ID and from specfic person or everyone

## Usage

```bash
$clear[amount;User ID/everyone (default is everyone);Channel ID (default $channelID);skip pinned messages (yes/no, default is no)]
```

### Example 1 (delete 10 messages of a user):
```bash
$clear[10;$authorID]
```

### Example 2 (delete 10 messages for all users):
```bash
$clear[10;everyone]
```

### Example 3 (delete 10 messages of a user, including pinned ones):
```bash
$clear[10;$authorID;yes]
```