# $imageDraw

Draws a loaded image onto the current image. This allows you to composite images together.

## Usage

```bash
$imageDraw[image name;x;y;width;height;opacity]
```

**Parameters:**

*   `image name`: The name of the image you loaded using `$imageLoad` or `$imageLoadFromURL`.  This name acts as a reference to the image you want to draw.
*   `x`: The x-coordinate of the top-left corner where the image will be drawn.
*   `y`: The y-coordinate of the top-left corner where the image will be drawn.
*   `width`: The width of the image to be drawn.  If different from the original image width, the image will be scaled.
*   `height`: The height of the image to be drawn. If different from the original image height, the image will be scaled.
*   `opacity`: (Optional) The opacity of the image, ranging from `0` (fully transparent) to `1` (fully opaque). If not specified, the image will be drawn with full opacity (`1`).

# Position: X & Y

For more detailed information on how X and Y coordinates work within image manipulation, please see: [Position (X & Y)](./../CodeReferences/ref.imgbuild.position.md)

# Size: Width & Height

For more detailed information on how Width and Height work within image manipulation (including scaling), please see: [Size (Width & Height)](./../CodeReferences/ref.imgbuild.size.md)

### Example:

This example creates a 300x300 image, loads the author's avatar, draws it onto the created image, and then outputs the result.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300] // Create Image Frame<br>$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]] // Load Avatar as "avatar"<br>$imageDraw[avatar;0;0;300;300] // Draw "avatar" at (0,0) with width 300 and height 300<br>$image[$imageOutput]<br><br>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/m4m7QLo.png">
        </discord-embed>
    </discord-message>
</discord-messages>