# $imageUseFont

set font type for text written on the images

## Usage
```bash
$imageUseFont[font name]
```

## Accepted Font Names:
DejaVu Serif, DejaVu Sans Mono, DejaVu Sans, Courier Prime, Lato, Montserrat, Open Sans, PT Mono, Quicksand, Raleway, Roboto, Roboto Mono, Rubik, Space Mono, Minecraft

## Fonts Preview:
![](https://i.imgur.com/OVSrq4l.png)

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageUseFont[Roboto]<br>$imageTextColor[white]<br>$imageTextSize[30]<br>$imageTextFill[Hello World;20;50]<br>$stop[{image:$imageOutput}]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/RcvQDM7.png">
            </discord-embed>
        </discord-message>
</discord-messages>