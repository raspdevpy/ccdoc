# $deleteEmojis

Delete a custom emoji(s) from the server.

## Usage

```bash
$deleteEmojis[emoji1;emoji2;...]
```

This function allows you to delete one or more custom emojis from your Discord server.  You must have the `Manage Emojis` permission to use this function.

**Parameters:**

*   `emoji1;emoji2;...`:  A semi-colon separated list of the emojis to delete.  You can use the emoji name, ID, or the emoji itself.

**Example:**

```
$deleteEmojis[customEmoji1;customEmoji2]
```

This example will delete the custom emojis named `customEmoji1` and `customEmoji2` from the server.


