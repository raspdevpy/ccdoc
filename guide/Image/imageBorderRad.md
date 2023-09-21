# $imageBorderRad

Control the border radius of the filled box with $imageFill

## Usage

```bash
$imageBorderRad[border radius for all corners]
or $imageBorderRad[top-left corner radius; top-right corner radius;bottom-right corner radius;bottom-left corner radius]
```

Example: (Draw Red Circle in the center)\
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageBorderRad[50]<br>$imageFill[red;100;100;100;100]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/wBb0uBm.png">
            </discord-embed>
        </discord-message>
</discord-messages>