# $imageLoadFromURL

Loads an image from a URL and saves it with a reference name for later use in other image manipulation functions.

## Usage

```bash
$imageLoadFromURL[name;URL]
```

*   **`name`**:  A unique name you'll use to refer to this image in other `$image...` functions. Choose a descriptive name like "avatar" or "background".
*   **`URL`**: The full URL of the image you want to load. This URL must point directly to an image file (e.g., `.png`, `.jpg`, `.gif`).

## Example

This example creates a 300x300 image, loads the author's avatar from their profile picture, and then draws the avatar onto the newly created image.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300] // Create Image Frame<br>
    $imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]] // Load the author's avatar<br>
    $imageDraw[avatar;0;0;300;300] // Draw the avatar onto the image frame<br>
    $image[$imageOutput] // Output the resulting image<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/m4m7QLo.png">
    </discord-embed>
  </discord-message>
</discord-messages>

**Explanation:**

1.  **`$imageCreate[300;300]`**:  Creates a new image with dimensions 300x300 pixels.
2.  **`$imageLoadFromURL[avatar;$replaceText[$authorAvatar;webp;png]]`**:
    *   Loads the image from the author's avatar URL (`$authorAvatar`).
    *   `$replaceText[$authorAvatar;webp;png]` replaces `.webp` extensions with `.png`. This is a common workaround since not all image libraries fully support `.webp` and `.png` is generally more compatible.  This ensures a compatible image format.
    *   Saves the loaded image with the name "avatar".
3.  **`$imageDraw[avatar;0;0;300;300]`**: Draws the image named "avatar" (loaded in the previous step) onto the created image.  The coordinates `0;0` specify the top-left corner of where the avatar should be placed, and `300;300` defines the width and height of the drawn image (effectively stretching or shrinking the avatar to fill the entire canvas).
4.  **`$image[$imageOutput]`**:  Outputs the final image. `$imageOutput` is a special variable that tells the command processor to display the generated image.

**Key takeaways:**

*   The `$imageLoadFromURL` function doesn't directly display the image. It loads it into memory for further processing with other `$image...` functions.
*   You must provide a valid URL that points directly to an image file.
*   Choose meaningful names for your loaded images; this will make your code easier to read and understand.