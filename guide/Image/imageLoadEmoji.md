# $imageLoadEmoji

Loads an emoji (either a standard Unicode emoji or a custom Discord emoji) for use in image drawing. This allows you to easily add emojis to your images.

## Usage

```bash
$imageLoadEmoji[id;Emoji]
```

**Parameters:**

*   `id`:  A unique identifier for the loaded emoji. You'll use this ID in the `$imageDraw` function to reference the emoji.  Choose something descriptive and easy to remember.
*   `Emoji`:  The emoji you want to load. This can be either:
    *   A standard Unicode emoji (e.g., `:smile:`, `:heart:`)
    *   A custom Discord emoji in the format `<:emoji_name:emoji_id>` (e.g., `<:custom_emoji:123456789012345678>`).  You can get the custom emoji format by typing the emoji in Discord and escaping it with a backslash (`\`), like this: `\:custom_emoji:`

## Examples

**Example 1: Loading and drawing a standard Unicode emoji**

This example creates a 300x300 image, loads the `:cheese:` emoji, fills a gray rectangle, and then draws the cheese emoji on top.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[300;300]<br>$imageLoadEmoji[mycheese;:cheese:]<br>$imageBorderRad[100]<br>$imageFill[gray;50;50;200;200]<br>$imageDraw[mycheese;100;100;100;100]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/eixJUIX.png">
    </discord-embed>
  </discord-message>
</discord-messages>

**Example 2: Loading and drawing both a standard and a custom emoji**

This example creates a 600x600 image, loads both a custom Discord emoji (using its ID) and the `:cheese:` emoji, and draws them both.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageCreate[600;600]<br>$imageLoadEmoji[seed;&#60;:seed:1149808771888062605&#62;]<br>$imageLoadEmoji[cheese;:cheese:]<br>$imageBorderRad[100]<br>$imageFill[gray;50;200;200;200]<br>$imageFill[gray;350;200;200;200]<br>$imageDraw[cheese;100;250;100;100]<br>$imageDraw[seed;400;250;100;100]<br>$image[$imageOutput]<br><br>
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    <discord-embed slot="embeds" image="https://i.imgur.com/m0ZkHyL.png">
    </discord-embed>
  </discord-message>
</discord-messages>