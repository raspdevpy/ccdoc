# `$imageUseFont`

Sets the font type for text rendered on images.

## Usage

```bash
$imageUseFont[font name]
```

## Available Fonts

You can choose from the following fonts:

*   DejaVu Serif
*   DejaVu Sans Mono
*   DejaVu Sans
*   Courier Prime
*   Lato
*   Montserrat
*   Open Sans
*   PT Mono
*   Quicksand
*   Raleway
*   Roboto
*   Roboto Mono
*   Rubik
*   Space Mono
*   Minecraft
*   Blackout
*   Motorblock

## Font Preview

See a preview of these fonts in the image below:

![](https://i.imgur.com/OVSrq4l.png)

## Example

This example creates a 300x300 image, sets the font to "Roboto", the text color to white, the text size to 30, and then writes "Hello World" at position 20x, 50y.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageUseFont[Roboto]<br>$imageTextColor[white]<br>$imageTextSize[30]<br>$imageTextFill[Hello World;20;50]<br>$stop[{image:$imageOutput}]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/RcvQDM7.png"></discord-embed>
    </discord-message>
</discord-messages>