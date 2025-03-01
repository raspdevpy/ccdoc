# `$imageTextStroke`

Add a stroke (border) to text on an image. This effect can enhance the visibility of your text, especially when placed over complex backgrounds.

## Usage

```bash
$imageTextStroke[Text;position x;position y;color (optional);opacity (optional)]
```

**Parameters:**

*   **`Text`**: The text you want to add a stroke to.
*   **`position x`**: The horizontal position of the text. See details below.
*   **`position y`**: The vertical position of the text. See details below.
*   **`color (optional)`**: The color of the stroke (border).  You can use Hex codes (e.g., `#FFFFFF` for white) or named colors (e.g., `red`).  If omitted, a default color will be used.
*   **`opacity (optional)`**: The opacity of the stroke, ranging from 0 (fully transparent) to 1 (fully opaque). If omitted, the stroke will be fully opaque (1).

## Understanding Position (X & Y)

For a deeper understanding of how to specify the X and Y coordinates for text positioning, please refer to the detailed explanation [here](./../CodeReferences/ref.imgbuild.position.md).

## Related: Size (Width & Height)

While not directly used in `$imageTextStroke`, understanding how to set image dimensions can be helpful when working with text.  You can learn more about width and height settings [here](./../CodeReferences/ref.imgbuild.size.md).

## Example

This example creates an image, sets the text size and alignment, and then adds stroked text to the image.

```discord
!!exec $imageCreate[300;300]
$imageTextSize[30]
$imageTextAlign[center]
$imageTextStroke[CC is Awesome;150;150;#4461b3]
$image[$imageOutput]
```

**Result:**

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300]<br>$imageTextSize[30]<br>$imageTextAlign[center]<br>$imageTextStroke[CC is Awesome;150;150;#4461b3]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/FVSYuIV.png">
    </discord-embed>
  </discord-message>
</discord-messages>