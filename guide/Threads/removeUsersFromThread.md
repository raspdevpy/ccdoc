# $removeUsersFromThread

remove users from a thread

## Usage

```bash
$removeUsersFromThread[Thread ID;User 1 ID;User 2 ID;User 3 ID....]
```

### Example (remove the triggerer from a thread):
```bash
$removeUsersFromThread[1024373454578917426;$authorID]


```

### Example (remove multiple users):
```bash
$removeUsersFromThread[1024373454578917426;$authorID;788361834360864808]
```