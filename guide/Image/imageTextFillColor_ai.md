# `$imageTextFillColor`

Set the color used to fill text in images.

This function allows you to control the color of the text you add to images.  You can use it in conjunction with other `$image` functions like `$imageText` to create visually appealing images.

## Syntax

```bash
$imageTextFillColor[Color name]
```

**Parameters:**

*   `Color name`: The name of the color you want to use. This can be:
    *   A standard CSS color name (e.g., `red`, `blue`, `green`, `white`, `black`).
    *   A hexadecimal color code (e.g., `#FF0000` for red, `#00FF00` for green, `#0000FF` for blue).
    *   An RGB color code (e.g., `rgb(255, 0, 0)` for red).

## Example

To set the text fill color to blue:

```bash
$imageTextFillColor[blue]
```

To set the text fill color to a specific shade of green using a hex code:

```bash
$imageTextFillColor[#008000]
```

**Important Considerations:**

*   Make sure the `Color name` is valid. Invalid colors will result in unexpected behavior.
