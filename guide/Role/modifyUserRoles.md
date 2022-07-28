# $modifyUserRoles

To modify user roles, you can add/remove/toggle roles in same time\
**op** can be:\
`+` for add\
`-` for remove\
`~` for toggle

## Usage

```bash
$modifyUserRoles[User ID;[op]Role 1;[op]Role 2;....]
```

### Example (add role 1 and remove role 2):
```bash
$modifyUserRoles[$authorID;+role 1;-role 2]
```