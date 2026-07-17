# $imageTextWeight

Controls the font weight (thickness) and style of text rendered on your images.  Use this variable to make your text bold, italic, or both!

## Usage

```bash
$imageTextWeight[Weight Type]
```

**Explanation:**

*   `$imageTextWeight` is the variable you'll use to set the font's weight and style.
*   `[Weight Type]` is where you specify the desired font weight and style.  See the "Types" section below for the available options.

## Available Weight Types

Here's a breakdown of the allowed values for `[Weight Type]`:

*   `regular`:  Normal, standard font weight (not bold or italic).
*   `bold`:  Displays the text in a bold font.
*   `italic`: Displays the text in an italic font.
*   `bold italic`: Displays the text in a bold and italic font.

**Example:**

To make your image text appear in bold, you would use:

```bash
$imageTextWeight[bold]
```