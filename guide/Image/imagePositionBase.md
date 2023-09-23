# $imagePositionBase

Adjust the base position of drawn image or object, by default it's topleft

## Usage

```bash
$imagePositionBase[Base]
```

### Base Values:
topleft, top, topright, centerleft, center, centerright, bottomleft, bottom, bottomright

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $imageCreate[300;300]<br>$imagePositionBase[centerleft]<br>$imageFill[white;center;center;100;100]<br>$imagePositionBase[centerright]<br>$imageFill[red;center;center;100;100]<br>$image[$imageOutput]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <discord-embed slot="embeds" image="https://i.imgur.com/wIK4BAm.png"><br></discord-embed>
        </discord-message>
</discord-messages>