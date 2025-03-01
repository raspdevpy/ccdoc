# $getEmbed

Retrieves information from an embed within a specific message. This function allows you to extract various details from an embed, such as its title, description, footer, and more.

## Usage

```bash
$getEmbed[Channel ID (optional);Message ID (optional);Info (optional, default is description);Embed Number (optional, default is 1)]
```

**Explanation:**

*   **Channel ID (optional):** The ID of the channel containing the message with the embed. If omitted, the current channel is used.
*   **Message ID (optional):** The ID of the message containing the embed. If omitted, the last message sent in the channel is used.
*   **Info (optional):** The specific piece of information you want to extract from the embed. Defaults to `description` if not provided.  See the "Info Values" section below for available options.
*   **Embed Number (optional):**  The number of the embed to retrieve information from, if the message contains multiple embeds. Defaults to `1` (the first embed).

## Info Values

These are the available values you can use to specify what information to retrieve from the embed using the `Info` parameter:

*   `title`: The title of the embed.
*   `footer`: The text content of the embed's footer.
*   `footer_image`: The URL of the image in the embed's footer.
*   `author`: The name of the embed's author.
*   `author_url`: The URL associated with the embed's author.
*   `author_image`: The URL of the image associated with the embed's author.
*   `color`: The decimal representation of the embed's color.
*   `color_hex`: The hexadecimal representation of the embed's color (e.g., `#0099ff`).
*   `description`: The description of the embed.
*   `field`:  Gets field name by index. Example: `field;1` will get the name of the second field. (Note: Fields are numbered starting from 1).
*   `field_value`: Gets field value by index. Example: `field_value;2` will get the value of the third field. (Note: Fields are numbered starting from 1).
*   `field_inline`: Returns `true` or `false` if the field is inline, by index. Example: `field_inline;3` will get if the fourth field is inline or not. (Note: Fields are numbered starting from 1).
*   `thumbnail`: The URL of the embed's thumbnail image.
*   `timestamp`: The timestamp of the embed (in ISO 8601 format).

### Example:

This example retrieves the description of an embed from a message in the same channel.

<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $getEmbed[$channelID;$messageID;description]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        This was an embed description
    </discord-message>
</discord-messages>