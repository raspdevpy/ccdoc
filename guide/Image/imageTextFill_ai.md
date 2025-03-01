# $imageTextFill

Add filled text to an image.

## Usage

```bash
$imageTextFill[Text;position x;position y;color;opacity]
```

**Parameters:**

*   **Text:** The text you want to write on the image.
*   **position x:** The x-coordinate for the text's position.  See [Position: X & Y](./../CodeReferences/ref.imgbuild.position.md) for more details.
*   **position y:** The y-coordinate for the text's position.  See [Position: X & Y](./../CodeReferences/ref.imgbuild.position.md) for more details.
*   **color:** The color of the text fill (e.g., `#4461b3`, `red`, `rgba(255,0,0,0.5)`).
*   **opacity:**  *This parameter is deprecated and no longer functional*.  Use a rgba color value instead to specify opacity.

## Related Information:

*   **Position: X & Y:** Learn more about specifying the X and Y coordinates for text placement [here](./../CodeReferences/ref.imgbuild.position.md).
*   **Size: Width & Height:**  Learn more about specifying width and height values related to images [here](./../CodeReferences/ref.imgbuild.size.md).  *Note this link may not be directly relevant to this specific function, but is included for general context*.

### Example:

This example creates a 300x300 image, sets the text size to 30, aligns the text to the center, and then writes "CC is Awesome" at position 150,150 with the color #4461b3.

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageTextSize[30]<br>$imageTextAlign[center]<br>$imageTextFill[CC is Awesome;150;150;#4461b3]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/PwNg0VA.png">
            </discord-embed>
        </discord-message>
</discord-messages>