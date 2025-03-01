# `$imageWidth`

Retrieves the width of an image. This function allows you to dynamically get the width of an image that has been previously loaded, referenced by its assigned name.

## Usage

```bash
$imageWidth[image name]
```

*   **`image name`**: (Optional) The name of the image you want to retrieve the width from. If no name is provided, it defaults to the currently loaded image.

## Examples

### Example 1: Get the width of the current image

This example shows how to get the width of the currently loaded image.

```bash
$imageWidth 
```

This will return the width (in pixels) of the image currently being processed.

### Example 2: Get the width of a named image

This example shows how to get the width of an image that was loaded and assigned the name "avatar".

```bash
$imageWidth[avatar]
```

This will return the width (in pixels) of the image loaded with the name "avatar".  Make sure an image was previously loaded and assigned the name "avatar" for this to work correctly.