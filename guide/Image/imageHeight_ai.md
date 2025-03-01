# `$imageHeight`

Retrieves the height of an image stored within the bot's memory. This function allows you to dynamically access the height of images based on their assigned name.

## Usage

```
$imageHeight[image name]
```

*   `image name`: The name you assigned to the image when you loaded it (e.g., using `$loadImage`). If no name is provided, it defaults to the most recently loaded image.

## Examples

### Example 1: Get the height of the last loaded image

```
$imageHeight
```

This will return the height of the most recently loaded image.  If no image has been loaded, it will likely return an error.

### Example 2: Get the height of an image named "avatar"

```
$imageHeight[avatar]
```