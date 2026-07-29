# $imageTextAlign

This command sets the text alignment for subsequent text written on an image. It affects how the `pos x` and `pos y` parameters are interpreted when using commands like `$imageText`.

In essence, `$imageTextAlign` determines the reference point for positioning your text.

## Usage

```
$imageTextAlign[Alignment]
```

## Alignments

The `Alignment` parameter accepts the following values:

*   **`left`**: Aligns the text to the left. `pos x` and `pos y` specify the coordinates of the **left edge** of the text.

*   **`center`**: Centers the text horizontally. `pos x` and `pos y` specify the coordinates of the **center** of the text.

*   **`right`**: Aligns the text to the right. `pos x` and `pos y` specify the coordinates of the **right edge** of the text.

**Example:**

Let's say you want to center the text "Hello World" at coordinates (100, 50) on your image. You would use the following commands:

```
$imageTextAlign[center]
$imageText[100,50,Hello World]
```

In this example, (100, 50) would be the center point of the "Hello World" text.