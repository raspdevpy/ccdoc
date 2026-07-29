# $imageFill

Fill a portion of an image with a specified color.

## Usage

```bash
$imageFill[color;x;y;width;height;opacity]
```

| Parameter | Description                                                                                                                   | Required |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------- | :------- |
| `color`   | The color to fill with. Can be a hex code (e.g., `#FF0000`) or a common color name (e.g., `gray`, `black`, `red`).           | Yes      |
| `x`       | The x-coordinate of the top-left corner of the rectangle to fill.  See [Positioning](./../CodeReferences/ref.imgbuild.position.md) for more details. | No       |
| `y`       | The y-coordinate of the top-left corner of the rectangle to fill.  See [Positioning](./../CodeReferences/ref.imgbuild.position.md) for more details. | No       |
| `width`   | The width of the rectangle to fill. See [Sizing](./../CodeReferences/ref.imgbuild.size.md) for more details.               | No       |
| `height`  | The height of the rectangle to fill. See [Sizing](./../CodeReferences/ref.imgbuild.size.md) for more details.              | No       |
| `opacity` | The opacity of the fill color (0-1, where 0 is fully transparent and 1 is fully opaque). Defaults to 1 if omitted. | No |

## Examples

### Example 1: Fill the entire image with gray.

```
!!exec $imageCreate[300;300]
$imageFill[gray]
$image[$imageOutput]
```

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageFill[gray]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/NwKtUYB.png">
            </discord-embed>
          </discord-message>
</discord-messages>

### Example 2: Fill a 50x50 rectangle at (100, 100) with red.

```
!!exec $imageCreate[300;300]
$imageFill[gray]
$imageFill[red;100;100;50;50]
$image[$imageOutput]
```

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageFill[gray]<br>$imageFill[red;100;100;50;50]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/QeSr9tZ.png">
            </discord-embed>
        </discord-message>
</discord-messages>
