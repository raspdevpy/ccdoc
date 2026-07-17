# $imagePositionBase

Control the base position for drawing images or objects. By default, the base position is `topleft`. This allows you to easily position elements relative to the top-left, center, or bottom-right of your image.

## Usage

```bash
$imagePositionBase[Base]
```

**Parameter:**

*   `Base`: Specifies the base position.  Must be one of the valid values listed below.

### Base Values:

The following values are accepted for the `Base` parameter:

*   `topleft`: Top-left corner
*   `top`: Top-center
*   `topright`: Top-right corner
*   `centerleft`: Center-left
*   `center`: Center
*   `centerright`: Center-right
*   `bottomleft`: Bottom-left corner
*   `bottom`: Bottom-center
*   `bottomright`: Bottom-right corner

### Example:

This example creates an image, sets the base position to `centerleft`, draws a white square, then sets the base position to `centerright` and draws a red square.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300]<br>$imagePositionBase[centerleft]<br>$imageFill[white;center;center;100;100]<br>$imagePositionBase[centerright]<br>$imageFill[red;center;center;100;100]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/wIK4BAm.png"></discord-embed>
  </discord-message>
</discord-messages>
