# $imageStrokeWidth

Controls the thickness of the stroke line used by the `$imageStroke` function. This allows you to customize the appearance of shapes and lines drawn on your images.

## Usage

```bash
$imageStrokeWidth[width]
```

### Parameters:

*   **`width`**: The desired thickness of the stroke line, measured in pixels. The default value is `1`.  A higher number results in a thicker line.

# Understanding Position (X & Y)

For a deeper understanding of how to position elements using X and Y coordinates, refer to this resource: [Positioning Guide](./../CodeReferences/ref.imgbuild.position.md)

# Understanding Size (Width & Height)

To learn more about defining the size of elements using Width and Height, please see this guide: [Size Guide](./../CodeReferences/ref.imgbuild.size.md)

### Example:

This example demonstrates how to create a red square with a stroke thickness of 10 pixels, centered on a 300x300 canvas.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imagePositionBase[center]<br>$imageStrokeWidth[10]<br>$imageStroke[red;center;center;50;50]<br>$image[$imageOutput]<br><br>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/0pqE9Ds.png"><br></discord-embed>
    </discord-message>
</discord-messages>