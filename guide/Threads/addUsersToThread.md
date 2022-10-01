# $addUsersToThread

Add users to a thread

## Usage

```bash
$addUsersToThread[Thread ID;User 1 ID;User 2 ID;User 3 ID....]
```

### Example (Add the triggerer to a thread):
```bash
$addUsersToThread[1024373454578917426;$authorID]


```

### Example (add multiple users):
```bash
$addUsersToThread[1024373454578917426;$authorID;788361834360864808]
```