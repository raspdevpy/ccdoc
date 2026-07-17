# $imageTextSize

Specifies the font size for text rendered in images.

This tag allows you to control the size of text used in image manipulation functions, ensuring readability and visual appeal.

## Usage

```
$imageTextSize[font size]
```

**Parameters:**

*   `font size`: (Required) An integer representing the desired font size.  Larger numbers result in larger text.

**Example:**

To set the text size to 20 pixels:

```
$imageTextSize[20]
```

**Notes:**

*   The valid range for font size depends on the font being used.  Experiment to find the best size for your needs.
*   If this tag is not used, a default font size will be applied.
*   Using excessively large font sizes can cause text to be clipped or overflow the image boundaries. Be mindful of the overall image dimensions.