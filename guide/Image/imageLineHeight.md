# $imageLineHeight

Adjust the line height used when drawing text within the image builder. The default line height is 1.5.

## Usage

```bash
$imageLineHeight[New Value (optional)]
```

**Explanation:**

*   **`$imageLineHeight`**:  This is the command to get or set the image line height.
*   **`[New Value (optional)]`**:  This is an optional parameter.
    *   If you provide a numerical value here (e.g., `1.3`), the line height will be set to that value.
    *   If you leave it empty, the command will return the current line height.

## Examples

### Setting the Line Height

To set the line height to `1.3`, use the following command:

```bash
$imageLineHeight[1.3]
```

This will change the line height used for text in future image builder commands.

### Getting the Current Line Height

To retrieve the current line height, use the command without any parameters:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $imageLineHeight
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    1.3
  </discord-message>
</discord-messages>