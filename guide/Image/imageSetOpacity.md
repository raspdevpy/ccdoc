# $imageSetOpacity

Sets the global opacity for all subsequent drawing operations performed by the image builder. This allows you to control the transparency of elements added to your image.

## Usage

```bash
$imageSetOpacity[opacity]
```

## Parameters

*   **`opacity`**: A numerical value between 0 and 100 representing the desired opacity level.

    *   `0`:  Fully transparent (invisible).
    *   `100`: Fully opaque (completely visible).
    *   Values between 0 and 100 create varying degrees of transparency.

## Example

This example sets the opacity to 50%, making subsequent drawings semi-transparent.

```bash
$imageSetOpacity[50]
```

## Practical Example

This example demonstrates how to use `$imageSetOpacity` to draw two avatars with different opacities.  It fetches the author's avatar, loads it into the image builder, draws it once at full opacity, then sets the opacity to 50% and draws it again.

```bash
!!exec $let[avatar;$replaceText[$authoravatar;.webp;.png]]
$imageCreate[300;300]
$imageLoadFromURL[avatar;$avatar]
$imageDraw[avatar;100;10;100;100]
$imageSetOpacity[50]
$imageDraw[avatar;100;190;100;100]
$image[$imageOutput]
```

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec ?exec $let[avatar;$replaceText[$authoravatar;.webp;.png]]<br>$imageCreate[300;300]<br>$imageLoadFromURL[avatar;$avatar]<br>$imageDraw[avatar;100;10;100;100]<br>$imageSetOpacity[50]<br>$imageDraw[avatar;100;190;100;100]<br>$image[$imageOutput]<br><br>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/1lgsIxt.png">
        </discord-embed>
    </discord-message>
</discord-messages>