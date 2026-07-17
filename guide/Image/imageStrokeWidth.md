# $imageStrokeWidth

Control the stroke line thickness when drawing with $imageStroke

## Usage

```bash
$imageStrokeWidth[width]
```

### Width:
Thickness unit, Default is 1 unit.

# Position: X & Y
You can read more about X, Y [here](./../CodeReferences/ref.imgbuild.position.md)

# Size: Width & Height
You can read more about Width, Height [here](./../CodeReferences/ref.imgbuild.size.md)

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imagePositionBase[center]<br>$imageStrokeWidth[10]<br>$imageStroke[red;center;center;50;50]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/0pqE9Ds.png"><br></discord-embed>
        </discord-message>
</discord-messages>
