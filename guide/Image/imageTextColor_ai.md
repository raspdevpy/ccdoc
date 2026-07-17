# $imageTextColor

Specifies the fill and stroke color of the text in your image. This command allows you to customize the text's appearance by setting its color.

## How to Use

The `$imageTextColor` command takes a single argument: the color you want to use for the text.

```bash
$imageTextColor[Color name]
```

**Explanation:**

*   `$imageTextColor`:  This is the command itself.
*   `[Color name]`:  Replace this with the name of a valid color. This could be:
    *   A standard color name (e.g., `red`, `blue`, `green`).
    *   A hexadecimal color code (e.g., `#FF0000` for red).
    *   An RGB color code (e.g., `rgb(255, 0, 0)` for red).

**Example:**

To set the text color to blue:

```bash
$imageTextColor[blue]
```

To set the text color to a specific shade of green using a hexadecimal code:

```bash
$imageTextColor[#008000]
```

**Important Considerations:**

*   Make sure the color name or code you provide is valid. Invalid values might result in unexpected behavior or default color being used.