# $imageTextStroke

write a stroke (border) text on an image

## Usage

```bash
$imageTextStroke[Text;position x;position y;color (optional);opacity (optional)]
```

# Position: X & Y
You can read more about X, Y [here](./../CodeReferences/ref.imgbuild.position.md)

# Size: Width & Height
You can read more about Width, Height [here](./../CodeReferences/ref.imgbuild.size.md)

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imageTextSize[30]<br>$$imageTextAlign[center]<br>$imageTextStroke[CC is Awesome;150;150;#4461b3]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
            <discord-embed slot="embeds" image="https://i.imgur.com/FVSYuIV.png">
            </discord-embed>
        </discord-message>
</discord-messages>