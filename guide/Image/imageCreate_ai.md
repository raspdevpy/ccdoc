# $imageCreate

Creates a new, blank image with specified dimensions.

## Usage

```bash
$imageCreate[width;height]
```

**Parameters:**

*   **width:** The width of the new image in pixels.
*   **height:** The height of the new image in pixels.

**Returns:**

This function creates a blank image and stores it for further processing with other image manipulation functions (e.g., `$imageFill`, `$image`). You can then use `$imageOutput` to display or save the resulting image.

## Example

This example creates a 300x300 pixel image, fills it with the color red, and then displays the image.

```
!!exec $imageCreate[300;300]
$imageFill[red]
$image[$imageOutput]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageFill[red]<br>$image[$imageOutput]<br><br>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/Qoz7xDW.png">
        </discord-embed>
    </discord-message>
</discord-messages>