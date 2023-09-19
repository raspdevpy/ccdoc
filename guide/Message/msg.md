# $msg
a compact function with many functionalities!

### Usage `$msg[channelid;messageid;property]`

#### Supported Properties

* **author** - message author ID

* **authormention** - message author mention

* **authortag** - message author tag

* **authorname** - message author name

* **authoravatar** - message author avatar

* **channel** - message channel id

* **channelname** - message channel name

* **cleancontent** - message content without any mentions removes `@here` , `@everyone\`

* **content** - message content

* **created** - message created date

* **guildid** - guild id of message

* **id** - message id

* **isdeleteable** - author of the command can delete the message, returns true/false.

* **isdeleted** -  message was deleted, returns true/false.

* **iseditable** - author of the command can edit the message, returns true/false.

* **ispinnable** - author of the command can pin the message, returns true/false.

* **ispinned** - message is pinned, returns true/false.

* **rawcontent** - message content without _**ANY**_ mentions.

* **guildname** - guild name of the message

* **url** - link to the message.

* **reference** - return message id , that was replied to

* **thread** - thread id of that message if exists (undefined otherwise)

* **pinned** - return true if message is pinned

* **allattachments** - return all attachments URLs separated by new line

* **allattachmentsname** - return all attachments names separated by new line

* attachment: return attachment URL of message (otherwise undefined), you can specify which attachment by using `additional 1` argument

* attachmentname: return attachment name of message (otherwise undefined), you can specify which attachment by using `additional 1` argument

* **embedtitle** - return message's embed title (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedcolor** - return message's embed color (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embeddesc** - return message's embed description (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedauthortext** - return message's embed author text (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedauthorurl** - return message's embed author URL (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedauthoricon** - return message's embed author ICON (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedimage** - return message's embed image (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedthumbnail** - return message's embed thumbnail (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedurl** - return message's embed title URL (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedfields** - return message's embed fields like NAME///VALUE///INLINE//////NAME 1///VALUE 1///INLINE 2.. (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embedfieldname** - return message's embed field name (otherwise undefined), you can specify which embed  by using `additional 1` argument, you can also specify which field by using `additional 2`

* **embedfieldvalue** - return message's embed field value (otherwise undefined), you can specify which embed  by using `additional 1` argument, you can also specify which field by using `additional 2`

* **embedfieldinline** - return message's embed field inline (otherwise undefined), you can specify which embed  by using `additional 1` argument, you can also specify which field by using `additional 2`

* **embedtimestamp** - return message's embed timestamp (otherwise undefined), you can specify which embed  by using `additional 1` argument

* **embed** - return message's embed in form like `{title:...}` (otherwise empty), you can specify which embed  by using `additional 1` argument

* **sticker** - return the sticker in the message, you can specify which sticker  by using `additional 1` argument

* **stickers** - return all the stickers in the message, separated by `, ` 

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $msg[$channelID;79890890890809;content]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Old Messsage
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />
