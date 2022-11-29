# Message Curl Format
Some functions accept message content argument
like `$sendMessage, $editMessage...`
but sometimes you want to send embed instead of plain text

You can provide those details using message curl format
### Usage: ```{info:value}```

### Example
Sending a embed with title `Hello` and description `World`
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


### List:
```
{title:text} adding a title
{url:link} adding a url for the title
{footer:text:url} adding a footer
{description:text} adding a description
{desc:text} alias to {description}
{color:hex} adding a color of embed
{author:text:url} adding author
{thumbnail:url} adding thumbnail
{field:name:value:inline} adding a field
{timestamp:ms} attaching a timestamp
{image:url} displaying image
{reactions:emoji,emoji2,...} add reactions after posting the message
{suppress:yes/no} suppress the embed of the message
{delete:time(s/m/h...)} delete the message after certain time after posting it
{button:Name:style:emoji:button id:new line(true/false)} add a button to the message
{edit:Time in ms:New Content} edit the message after certain time
{file:Name:Content} adding attachment file from text
{attachment:Name:URL} adding attachment file from url
{deletecommand} to delete the original command message
{reply:message id} to reply to a message
{reply_mention:yes/no} to ping user on reply or not
{interaction} to send message through an interaction
{ephemeral:yes/no} to send message privately or not, useful only if {interaction} enabled
{stickers:Sticker 1 ID:Sticker 2 ID:Sticker 3 ID} to send stickers
{pin}	to pin the sent message
```

::: tip Note
Sometimes value contains characters like : (colon), [ , ; ,  ]<br>
you have to escape it to avoid unexpected results by putting \ before it<br>
for example `\:`<br>
If your original format is: `{author:I love;World}`
Correct is: `{author:I love\;World} `
:::
###### Tags: <Badge type="tip" text="Message Curl Format" vertical="middle" />
