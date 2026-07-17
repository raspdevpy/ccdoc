# $imageDrawBack

Draws a loaded image behind the current image. This allows you to layer images and create more complex visuals.

## Usage

```bash
$imageDrawBack[image name;x;y;width;height;opacity]
```

**Parameters:**

*   **`image name`:** The name of the image loaded using `$imageLoad` or `$imageLoadFromURL` that you want to draw in the background.
*   **`x`:** The horizontal position (X-coordinate) where the top-left corner of the background image will be placed.
*   **`y`:** The vertical position (Y-coordinate) where the top-left corner of the background image will be placed.
*   **`width`:** The width of the background image when drawn. You can resize the image using this parameter.
*   **`height`:** The height of the background image when drawn. You can resize the image using this parameter.
*   **`opacity`:** (Optional) The opacity of the background image, ranging from 0 (fully transparent) to 1 (fully opaque). If omitted, the image will be drawn with full opacity.

# Position: X & Y

For a more detailed explanation of X and Y coordinates, refer to this resource: [X & Y Position Reference](./../CodeReferences/ref.imgbuild.position.md)

# Size: Width & Height

For a more detailed explanation of Width and Height, refer to this resource: [Width & Height Reference](./../CodeReferences/ref.imgbuild.size.md)

### Example:

This example creates an image, loads a user's avatar, fills the background with gray, adds a transparent rectangle, and then draws the avatar behind it.

```
!!exec $imageCreate[300;300]
$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]]
$imageFill[gray]
$imageFill[transparent;100;100;100;100]
$imageDrawBack[avatar;50;50;200;200]
$image[$imageOutput]
```

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300] // Create Image Frame<br>$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]]<br>$imageFill[gray]<br>$imageFill[transparent;100;100;100;100]<br>$imageDrawBack[avatar;50;50;200;200]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/r92gm8i.png">
    </discord-embed>
  </discord-message>
</discord-messages>