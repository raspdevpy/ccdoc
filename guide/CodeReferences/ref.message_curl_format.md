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
| Curl Format | Description | Example (click to see output) |
|:-----------:|-------------|---------|
| {title:text} | adding a title | [{title:My name is $username}](https://i.imgur.com/vUfjDLa.png) |
| {url:link} | adding a url for the title | [{url:https://discord.com}](https://i.imgur.com/k234oP0.png) |
| {footer:text:url} | adding a footer | [{footer:You see my small profile?:$authorAvatar}](https://i.imgur.com/MbG9VQ3.png) |
| {description:text} | adding a description | [{description:Do you know that this month is $month?}](https://i.imgur.com/BV7wZpY.png) |
| {desc:text} | alias to {description} | {desc:Hello World, do you see this description?} |
| {color:hex} | adding a color of embed | [{color:RED} or {color:#ff0000}](https://i.imgur.com/f9no81k.png) |
| {author:text:image url:link url} | adding author | [{author:$username:$authorAvatar:$authorAvatar}](https://i.imgur.com/2DU2dwn.png) |
| {thumbnail:url} | adding thumbnail | [{thumbnail:$authorAvatar}](https://i.imgur.com/HruXoXs.png) |
| {field:name:value:inline} | adding a field | [{field:My name:$username}](https://i.imgur.com/zSdpHiW.png) |
| {timestamp:ms} | attaching a timestamp | [{timestamp} or {timestamp:1680871946176}](https://i.imgur.com/2CEzTcp.png) |
| {image:url} | displaying image | [{image:$authorAvatar}](https://i.imgur.com/Gmrxc69.png) |
| {reactions:emoji,emoji2,...} | add reactions after posting the message | [{reactions: :+1:, :-1:}](https://i.imgur.com/Niff1PI.png) |
| {reaction:emoji,emoji2,...} | alias for {reactions} | {reaction: :+1:, :-1:} |
| {suppress:yes/no} | suppress the embed of the message | [{suppress:yes}](https://i.imgur.com/xomAWFd.png) |
| {delete:time(s/m/h...)} | delete the message after certain time after posting it | {delete:5s} |
| {button:Name:style:emoji:button id:new line(yes/no):disabled(yes/no)} | add a button to the message | [{button:Green button:green::id1}](https://i.imgur.com/CIj0FMU.png) |
| {edit:Time in ms:New Content} | edit the message after certain time | [{edit:5s:My edited content}](https://i.imgur.com/p7LsT5C.png) |
| {file:Name:Content} | adding attachment file from text | No example |
| {attachment:Name:URL} | adding attachment file from url | No example |
| {deletecommand} | to delete the original command message immediately | No example |
| {deletecommand:time} | to delete the original command message after `time` like 5s | {deletecommand:5s} |
| {reply:message id} | to reply to a message | No example |
| {reply_mention:yes/no} | to ping user on reply or not | No example |
| {interaction} | to send message through an interaction | No example |
| {ephemeral:yes/no} | to send message privately or not, useful only if {interaction} enabled | No example |
| {private:yes/no} | alias as ephemeral | No example |
| {stickers:Sticker 1 ID:Sticker 2 ID:Sticker 3 ID} | to send stickers | No example |
| {pin} | to pin the sent message | No example |
| {silent} | send message in silent mode, will not send push notification to discord users | [{silent}](https://i.imgur.com/HhSr6ec.png) |


::: tip Note
Sometimes value contains characters like : (colon), [ , ; ,  ]<br>
you have to escape it to avoid unexpected results by putting \ before it<br>
for example `\:`<br>
If your original format is: `{author:I love;World}`
Correct is: `{author:I love\;World} `
:::
###### Tags: <Badge type="tip" text="Message Curl Format" vertical="middle" />
