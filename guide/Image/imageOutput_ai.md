# `$imageOutput`

This function saves the current image being drawn into a file and returns the filename. This filename can then be used within other functions like `$image` or within the `{image:...}` tag in functions like `$sendMessage`.

**In simpler terms:** Imagine you're drawing on a canvas using other image commands.  `$imageOutput` lets you save that drawing as an actual image file (like a PNG or JPG) so you can then send it or use it elsewhere.

## Usage

```bash
$imageOutput[type]
```

**Parameters:**

*   `type`:  Specifies the image file format to save as.  Valid options are `png` or `jpg`.

## Examples

These examples assume you've already used functions like `$imageCreate` and other image manipulation commands to build the image you want to save.

**Example 1: Sending the image directly using `$image`**

```bash
$imageCreate[...] // Create the initial image (replace [...] with actual parameters)
// ... Building the image using other $image functions ...
$image[$imageOutput[png]] // Save as PNG and send the image using $image function
```

**Explanation:**

1.  `$imageCreate[...]`:  This line represents the code that creates the image you want to save.  You'll need to replace `[...]` with the actual parameters for `$imageCreate`.
2.  `// ... Building the image using other $image functions ...`: This represents the other `$image...` functions which are used to modify the image.
3.  `$imageOutput[png]`:  This saves the current image as a PNG file and returns the generated filename.
4.  `$image[...]`: This function takes the filename returned by `$imageOutput` and uses it to send the image.

**Example 2: Sending the image using `{image:...}` in `$sendMessage`**

```bash
$imageCreate[...] // Create the initial image (replace [...] with actual parameters)
// ... Building the image using other $image functions ...
$sendMessage[{image:$imageOutput[jpg]}] // Save as JPG and send the image using $sendMessage function
```

**Explanation:**

1.  `$imageCreate[...]`:  Similar to Example 1, this creates the initial image.
2.  `// ... Building the image using other $image functions ...`: This represents the other `$image...` functions which are used to modify the image.
3.  `$imageOutput[jpg]`:  This saves the current image as a JPG file and returns the generated filename.
4.  `{image:$imageOutput[jpg]}`: This is used as parameter for `$sendMessage` to specify which image to send.

**Important Considerations:**

*   Make sure you have created an image using `$imageCreate` or similar functions **before** calling `$imageOutput`.