# `$getRoleColor`

Retrieves the hexadecimal color code of a role.

#### Usage: `$getRoleColor[roleID]`

**Arguments:**

*   `roleID`: The ID of the role whose color you want to retrieve.  This can be obtained using functions like `$mentioned[1]` or `$findRole[roleName]`.

<br/>

**Example:**

Let's say you want to get the color of the role with the ID `123456789012345678`. You would use:

```
$getRoleColor[123456789012345678]
```

This would return the hex color code of the role, such as `#FF0000` (red).

<br/>

**Function Difficulty:** <Badge type="tip" text="Easy" vertical="middle" />

**Tags:** <Badge type="tip" text="get" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="color" vertical="middle" />