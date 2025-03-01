# $imageStroke

Draws a rectangle outline (stroke) on the canvas.

## Usage

```bash
$imageStroke[color;x;y;width;height;opacity]
```

**Parameters:**

*   `color`: The color of the stroke.  Can be a named color (e.g., `red`, `blue`, `green`), a hex code (e.g., `#FF0000`), or an RGB value (e.g., `rgb(255,0,0)`).
*   `x`: The x-coordinate of the top-left corner of the rectangle.  Use `$imagePositionBase` to control the origin. See more details below.
*   `y`: The y-coordinate of the top-left corner of the rectangle.  Use `$imagePositionBase` to control the origin. See more details below.
*   `width`: The width of the rectangle. See more details below.
*   `height`: The height of the rectangle. See more details below.
*   `opacity` (Optional):  The opacity of the stroke. A value between 0 (fully transparent) and 1 (fully opaque). Defaults to 1 if not provided.

### Stroke Width

The thickness of the stroke is controlled by the `$imageStrokeWidth` command.

## Position (X & Y)

The `x` and `y` parameters define the position of the rectangle's top-left corner. You can change the reference point (origin) for these coordinates using the `$imagePositionBase` command.

[Learn more about X and Y positioning](./../CodeReferences/ref.imgbuild.position.md)

## Size (Width & Height)

The `width` and `height` parameters define the dimensions of the rectangle.

[Learn more about Width and Height sizing](./../CodeReferences/ref.imgbuild.size.md)

### Example:

This example creates a 300x300 canvas, sets the position base to `center`, sets the stroke width to 10, and then draws a red rectangle with a width and height of 50, centered on the canvas.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300]<br>$imagePositionBase[center]<br>$imageStrokeWidth[10]<br>$imageStroke[red;center;center;50;50]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/0pqE9Ds.png"></discord-embed>
  </discord-message>
</discord-messages>