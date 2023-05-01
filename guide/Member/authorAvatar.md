# $authorAvatar

Returns the URL to the User's avatar that triggered the command.

::: tip Discord adds image to message if link provided  <Badge type="tip" text="Read examples section" vertical="middle"/>
If a message contains only a link to an image, Discord sends **only** the image.

If a message has a link to an image AND some text, Discord sends **both** the link and the image.

To add image without posting the link use [$attachment](../Text/Embed/attachment.md)

To send link as a plain text wrap the function into graves like<code>\`$authorAvatar\`</code>
:::

## Usage

```bash
$authorAvatar[Return Server Avatar Instead (yes/no, default is no)]
```

## Examples

### Message contains text and link to image

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

### Message contains only link to image

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

### Send text and image without link

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

### Send link as plain text

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