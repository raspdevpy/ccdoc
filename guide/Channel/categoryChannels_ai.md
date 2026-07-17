# $categoryChannels

This function retrieves information about channels within a specified category.

## Usage

```markdown
$categoryChannels[Category ID;Info type (name/id/mention);Separator (optional, default is ",")]
```

**Parameters:**

*   **`Category ID`:** The ID of the category you want to retrieve channel information from. This is a numerical value.
*   **`Info type`:**  Determines what information you want to retrieve for each channel. Choose from:
    *   `name`: Returns the name of each channel.
    *   `id`: Returns the ID of each channel.
    *   `mention`: Returns a mention string for each channel.
*   **`Separator` (Optional):**  Specifies the character or string to separate the channel information. If not provided, the default separator is a comma (`,`).

## Example

```markdown
!!exec $categoryChannels[1004738497191628860;name;, ]
```

This example retrieves the names of all channels within the category with the ID `1004738497191628860`, separated by a comma and a space.

**Result:**

![](https://i.imgur.com/3H1BazG.png)