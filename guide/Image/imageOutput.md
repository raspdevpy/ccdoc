# $imageOutput

Generate the current draw into file, and return the filename, it can be used inside $image or {image:...} and other places that accept image

## Usage

```bash
$imageOutput[type]
```

### Types:
accepted type is `png` or `jpg`

### Example 1:
```bash
$imageCreate[..]
// Building the image
$image[$imageOutput] // send the image


```

### Example 2:
```bash
$imageCreate[..]
// Building the image
$sendMessage[{image:$imageOutput[png]}] // send the image
```
