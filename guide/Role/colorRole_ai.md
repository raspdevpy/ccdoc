# `$colorRole`

Change the color of a specific role.

#### Usage:

`$colorRole[roleID;hex or int color]`

*   **roleID:** The ID of the role you want to modify.
*   **hex or int color:** The new color for the role. You can specify this as either a hexadecimal color code (e.g., `#FF0000` for red) or an integer color value (e.g., `16711680` for red).

##### Example:

To change the color of the role with ID `123456789012345678` to blue, you could use either of the following:

```
$colorRole[123456789012345678;#0000FF]
```

```
$colorRole[123456789012345678;255]
```

##### Function Difficulty: <Badge type="tip" text="Easy/Medium" vertical="middle" />

###### Tags: <Badge type="tip" text="role" vertical="middle" /> <Badge type="tip" text="color" vertical="middle" /> <Badge type="tip" text="modify" vertical="middle" />