# $hyperlink

The `$hyperlink` function allows you to create hyperlinks specifically designed for use within Discord embeds. This ensures your links are properly rendered and clickable within the embedded message.

## Usage

```
$hyperlink[url;title]
```

*   **url:** The complete URL you want the link to point to (e.g., `https://discord.com`).
*   **title:** The text that will be displayed as the clickable link.

## Example

Let's say you want to create a Discord embed with a description that includes a link to your Discord server. You could use the following:

```
$description[$hyperlink[https://discord.com;Join us on Discord!]]
```

In this example:

*   `https://discord.com` is the URL of your Discord server.
*   `Join us on Discord!` is the text that will be displayed as the clickable link.

## Output

The code above will produce an embed similar to the following:

![Example Output](https://i.imgur.com/nADyi95.png)