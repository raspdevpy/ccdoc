# Message Curl Format

Some functions, like `$sendMessage` and `$editMessage`, accept message content as an argument. While you can send plain text, you might want to send a more visually appealing embed instead.

Message Curl Format allows you to define embed details easily.

### Usage: ```{info:value}```

This format uses curly braces `{}` to define different aspects of your message.  The `info` part specifies what you want to set (like the title or description), and the `value` is what you want to set it to.

### Example

Here's how to send an embed with the title "Hello" and the description "World":

<discord-messages>
	<discord-message>
		!!exec $sendMessage[{title:Hello}{description:World}]
	</discord-message>
	<discord-message :bot="true" author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed embedTitle="Hello">
        <discord-embed-description>
            World
        </discord-embed-description>
        </discord-embed>
	</discord-message>
</discord-messages>

### Available Curl Formats:

| Curl Format | Description | Example (click to see output) |
|:-----------:|-------------|---------|
| `{title:text}` | Adds a title to the embed. | [{title:My name is $username}](https://i.imgur.com/vUfjDLa.png) |
| `{url:link}` | Makes the title a clickable link.  | [{url:https://discord.com}](https://i.imgur.com/k234oP0.png) |
| `{footer:text:url}` | Adds a footer with optional image.  The URL is for the footer icon. | [{footer:You see my small profile?:$authorAvatar}](https://i.imgur.com/MbG9VQ3.png) |
| `{description:text}` | Sets the main text content of the embed. | [{description:Do you know that this month is $month?}](https://i.imgur.com/BV7wZpY.png) |
| `{desc:text}` | An alias (shorter version) of `{description:text}`. | {desc:Hello World, do you see this description?} |
| `{color:hex}` | Sets the color of the embed's side border. Use a hex code (like `#ff0000`) or a color name (like `RED`). | [{color:RED} or {color:#ff0000}](https://i.imgur.com/f9no81k.png) |
| `{author:text:image url:link url}` |  Adds an author section to the embed.  You can specify the author's name, an image URL for their avatar, and a URL that the author's name links to. | [{author:$username:$authorAvatar:$authorAvatar}](https://i.imgur.com/2DU2dwn.png) |
| `{thumbnail:url}` |  Adds a small image in the top right corner of the embed. | [{thumbnail:$authorAvatar}](https://i.imgur.com/HruXoXs.png) |
| `{field:name:value:inline}` | Adds a field (a small section with a title and value).  Set `inline` to `true` or `false` (or `yes`/`no`) to make the field appear next to other inline fields. | [{field:My name:$username}](https://i.imgur.com/zSdpHiW.png) |
| `{timestamp:ms}` |  Adds a timestamp to the embed.  If you don't provide a value, it uses the current time.  You can also provide a specific timestamp in milliseconds. | [{timestamp} or {timestamp:1680871946176}](https://i.imgur.com/2CEzTcp.png) |
| `{image:url}` | Adds a large image at the bottom of the embed. | [{image:$authorAvatar}](https://i.imgur.com/Gmrxc69.png) |
| `{reactions:emoji,emoji2,...}` |  Adds reactions to the message after it's sent.  Separate multiple emojis with commas. Use the standard Discord emoji format (e.g., `:+1:`). | [{reactions: :+1:, :-1:}](https://i.imgur.com/Niff1PI.png) |
| `{reaction:emoji,emoji2,...}` | Alias for `{reactions}`. | {reaction: :+1:, :-1:} |
| `{suppress:yes/no}` |  Suppresses the embed for URLs in the message, preventing link previews. | [{suppress:yes}](https://i.imgur.com/xomAWFd.png) |
| `{delete:time(s/m/h...)}` |  Deletes the message automatically after a certain amount of time.  Use `s` for seconds, `m` for minutes, `h` for hours, etc. | {delete:5s} |
| `{button:Name:style:emoji:button id:new line(yes/no):disabled(yes/no)}` | Adds a button to the message. `style` can be `blue`, `green`, `red`, `grey` or a url, `emoji` is optional, `new line` indicates if the button should be in a new line, `disabled` to disable the button | [{button:Green button:green::id1}](https://i.imgur.com/CIj0FMU.png) |
| `{edit:Time in ms:New Content}` | Edits the message after a specified time (in milliseconds) with new content.  | [{edit:5s:My edited content}](https://i.imgur.com/p7LsT5C.png) |
| `{file:Name:Content}` |  Adds an attachment file to the message, using the provided text as the file content. | No example |
| `{attachment:Name:URL}` | Adds an attachment file to the message, fetching the file from the given URL. | No example |
| `{deletecommand}` | Deletes the original command message immediately after the new message is sent. | No example |
| `{deletecommand:time}` | Deletes the original command message after a specified time (e.g., `5s`). | {deletecommand:5s} |
| `{reply:message id}` | Replies to a specific message using its ID. | No example |
| `{reply_mention:yes/no}` |  Determines whether the user being replied to should be mentioned (pinged). | No example |
| `{interaction}` |  Sends the message through an interaction (e.g., a slash command). This is often required for ephemeral messages. | No example |
| `{ephemeral:yes/no}` | Sends the message privately to the user who triggered the interaction.  Only works if `{interaction}` is enabled. | No example |
| `{private:yes/no}` | Alias for `{ephemeral:yes/no}`. | No example |
| `{stickers:Sticker 1 ID:Sticker 2 ID:Sticker 3 ID}` | Sends stickers using their IDs. | No example |
| `{pin}` | Pins the sent message to the channel. | No example |
| `{silent}` | Sends the message in silent mode, which doesn't send push notifications to Discord users.  | [{silent}](https://i.imgur.com/HhSr6ec.png) |

::: tip Note

Sometimes values contain special characters like colons (`:`), square brackets (`[` and `]`), semicolons (`:`), or backslashes (`\`). You need to *escape* these characters by placing a backslash (`\`) before them to prevent unexpected results. For example, to use a colon in your text, you would write `\:`.

If your original format is: `{author:I love:World}`
Correct is: `{author:I love\:World} `
:::

###### Tags: <Badge type="tip" text="Message Curl Format" vertical="middle" />