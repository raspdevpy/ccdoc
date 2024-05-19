# $imageCrop

Crop a defined image from image builder

## Usage

```bash
$imageCrop[image name;x;y;width;height]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300] // Create Image Frame<br>$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]]<br>$imageCrop[avatar;0;0;100;100] // crop the image from position (0, 0) with size 100<br>$imageDraw[avatar]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        [image]
        </discord-message>
</discord-messages>