# $imageDraw

Draw a loaded image on the current image

## Usage

```bash
$imageDraw[image name;x;y;width;height;opacity]
```

# Position: X & Y
You can read more about X, Y [here](./../CodeReferences/ref.imgbuild.position.md)

# Size: Width & Height
You can read more about Width, Height [here](./../CodeReferences/ref.imgbuild.size.md)

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300] // Create Image Frame<br>$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]]<br>$imageDraw[avatar;0;0;300;300]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/m4m7QLo.png">
            </discord-embed>
        </discord-message>
</discord-messages>