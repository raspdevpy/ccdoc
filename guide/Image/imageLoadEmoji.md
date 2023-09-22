# $imageLoadEmoji

prepare an emoji (unicode one or custom emoji) to be drawn

## Usage

```bash
$imageLoadEmoji[id;Emoji]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageLoadEmoji[mycheese;:cheese:]<br>$imageBorderRad[100]<br>$imageFill[gray;50;50;200;200]<br>$imageDraw[mycheese;100;100;100;100]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/eixJUIX.png">
            </discord-embed>
        </discord-message>
</discord-messages>

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[600;600]<br>$imageLoadEmoji[seed;&#60;:seed:1149808771888062605&#62;]<br>$imageLoadEmoji[cheese;:cheese:]<br>$imageBorderRad[100]<br>$imageFill[gray;50;200;200;200]<br>$imageFill[gray;350;200;200;200]<br>$imageDraw[cheese;100;250;100;100]<br>$imageDraw[seed;400;250;100;100]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/m0ZkHyL.png">
            </discord-embed>
        </discord-message>
</discord-messages>