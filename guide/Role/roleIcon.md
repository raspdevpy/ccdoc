# $roleIcon

This function allows you to either retrieve or set the icon of a role within a guild (server).

## Usage

```bash
$roleIcon[role; icon (optional)]
```

**Parameters:**

*   **`role`**: (Required)  This can be the name or ID of the role you want to interact with.
*   **`icon`**: (Optional)  If provided, this will set the role's icon.  If omitted, the function will return the role's current icon URL.  This can be a direct image URL or a custom emoji.

## Examples

### Example 1: Getting a Role's Icon

This example demonstrates how to retrieve the icon of a role named "Support".

```bash
$roleIcon[Support]
```

**Output:**

![](https://i.imgur.com/d0PfOjB.png)

### Example 2: Setting a Role's Icon with an Image URL

This example sets the icon of a role named "Member" using an image URL.

```bash
$roleIcon[Member;https://cdn-icons-png.flaticon.com/512/6080/6080057.png]
```

**Important:** The bot needs the necessary permissions to modify roles in the server for this to work.

### Example 3: Setting a Role's Icon with a Custom Emoji

This example sets the icon of a role named "Member" using a custom emoji.

```bash
$roleIcon[Member;<:happy:862641528890851328>]
```

**Note:**

*   Make sure the bot has access to the custom emoji you are using (i.e., it's from a server the bot is in).
*   Again, the bot requires the necessary permissions to modify roles in the guild.  The bot needs "Manage Roles" permissions.