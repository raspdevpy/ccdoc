# $authorAvatar

Returns the URL to the User's avatar that triggered the command.

::: tip Discord adds image to message if link provided
If a message contains only a link to an image, Discord sends **only** the image.

If a message has a link to an image AND some text, Discord sends **both** the link and the image.

To add image without posting the link use [$attachment](../Text/Embed/attachment.md)

To send link as a plain text wrap the function into graves like<code>\`$authorAvatar\`</code>
:::

## Usage

```bash
$authorAvatar
```

## Example
![](https://i.imgur.com/9YUC18Q.png)