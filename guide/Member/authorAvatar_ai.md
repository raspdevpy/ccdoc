# $authorAvatar

This function returns the URL of the avatar for the user who triggered the command.

::: tip Important Considerations
Discord automatically embeds images when a link to an image is included in a message.  See the examples below to understand the different ways Discord handles image links.
- If a message contains *only* a link to an image, Discord sends only the image embed.
- If a message contains a link to an image *and* additional text, Discord sends both the link and the image embed.

To send the image as an attachment *without* displaying the link, use the [$attachment](../Text/Embed/attachment.md) function.

To display the avatar URL as plain text (without embedding the image), enclose the function in backticks:  `` `$authorAvatar` ``.
:::

## Usage

```bash
$authorAvatar[Return Server Avatar Instead (yes/no, default is no)]
```

## Arguments

*   `Return Server Avatar Instead (yes/no, default is no)`:  An optional argument.  If set to `yes`, the function will return the user's server avatar (if they have one) instead of their global avatar.  Defaults to `no`.

## Examples

### Sending the Avatar URL with Text

This example demonstrates how the avatar URL is displayed when sent with accompanying text.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="crochet" avatar="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096" >
		!!exec My avatar link: $authorAvatar<br/>
        Image attached below:
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" >
        My avatar link:
            <a href="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096">
                https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096
            </a><br/>
        Image attached below:
        <DiscordReaction image="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096"></DiscordReaction>
    </discord-message>
</discord-messages>

### Sending Only the Avatar URL

This example demonstrates how the avatar is embedded when *only* the avatar URL is sent in the message.

::: details Example
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="crochet" avatar="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096" >
        !!exec $authorAvatar
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" >
        <DiscordReaction image="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096"></DiscordReaction>
    </discord-message>
</discord-messages>
:::

### Sending the Avatar as an Attachment (Without the Link)

This example demonstrates how to send the avatar as an attachment *without* including the direct link in the message.  This is achieved using the `$attachment` function.

::: details Example
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="crochet" avatar="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096" >
        !!exec No link, only text and image<br/>
        $attachment[$authorAvatar]
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" >
        No link, only text and image
        <DiscordReaction image="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096"></DiscordReaction>
    </discord-message>
</discord-messages>
:::

### Sending the Avatar URL as Plain Text

This example demonstrates how to display the avatar URL as plain text instead of embedding the image.  This is done by wrapping the function call in backticks.

::: details Example
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="crochet" avatar="https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096" >
        !!exec <DiscordMarkdown>`$authorAvatar`</DiscordMarkdown><br/>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp" >
        <DiscordMarkdown>
            `https://cdn.discordapp.com/avatars/808007806266769458/768de61c5d90024e100ec5c058d3c2fe.webp?size=4096`
        </DiscordMarkdown>
    </discord-message>
</discord-messages>
:::