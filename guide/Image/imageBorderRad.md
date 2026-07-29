# $imageBorderRad

Control the border radius of a filled box created with $imageFill. This allows you to round the corners of your shapes for softer, more visually appealing designs.

## Usage

You can specify a single radius value to apply to all corners, or provide individual values for each corner for more precise control.

```bash
$imageBorderRad[border radius for all corners]
```

```bash
$imageBorderRad[top-left corner radius; top-right corner radius; bottom-right corner radius; bottom-left corner radius]
```

**Explanation:**

*   **`$imageBorderRad[...]`**:  This is the function call.  The values inside the square brackets determine the border radius.
*   **Single Value:** If you provide only one number (e.g., `50`), it will be used as the radius for all four corners.
*   **Four Values:** If you provide four numbers separated by semicolons (`;`), they represent the radius of the corners in this order: top-left, top-right, bottom-right, bottom-left.

## Example: Creating a Red Circle

This example demonstrates how to draw a red circle in the center of a 300x300 pixel image using `$imageBorderRad` in conjunction with `$imageCreate` and `$imageFill`.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300]<br>$imageBorderRad[50]<br>$imageFill[red;100;100;100;100]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/wBb0uBm.png">
    </discord-embed>
  </discord-message>
</discord-messages>

**Breakdown of the command:**

1.  **`$imageCreate[300;300]`**: Creates a new image with a width of 300 pixels and a height of 300 pixels.
2.  **`$imageBorderRad[50]`**: Sets the border radius of the shape to 50 pixels for all corners.  Because we fill a square with `$imageFill` later, this large radius effectively turns it into a circle.
3.  **`$imageFill[red;100;100;100;100]`**: Fills a 100x100 pixel square with the color red, starting at the coordinates (100, 100) - which centers the square.