# $imageSetOpacity

set global opacity for anything the image builder draw next

## Usage

```bash
$imageSetOpacity[opacity]
```

### opacity:
Its a value between 0-100, 0 means fully transparent, 100 means fully opaque

### Example:
```bash
$imageSetOpacity[50]

```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec ?exec $let[avatar;$replaceText[$authoravatar;.webp;.png]]<br>$imageCreate[300;300]<br>$imageLoadFromURL[avatar;$avatar]<br>$imageDraw[avatar;100;10;100;100]<br>$imageSetOpacity[50]<br>$imageDraw[avatar;100;190;100;100]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/1lgsIxt.png">
            </discord-embed>
        </discord-message>
</discord-messages>