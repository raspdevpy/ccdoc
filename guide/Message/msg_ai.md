# $msg
The `$msg` function is a powerful and compact tool that lets you extract a wide range of information from Discord messages.

### Usage: `$msg[channelid;messageid;property]`

To use the `$msg` function, you need to provide the channel ID, the message ID, and the specific property you want to retrieve.  Let's break it down:

*   **`channelid`**: The ID of the channel where the message is located.
*   **`messageid`**: The ID of the message you want to get information from.
*   **`property`**: The specific piece of information you want to retrieve from the message.

#### Example:

```
$msg[1234567890;9876543210;authorname]
```

This would return the author's name of the message with the ID `9876543210` located in the channel with the ID `1234567890`.

### Supported Properties

Here's a comprehensive list of the properties you can access with the `$msg` function:

**Author Information:**

*   **`author`**: The message author's user ID.
*   **`authormention`**:  A mention of the message author (e.g., `<@1234567890>`).
*   **`authortag`**: The message author's full Discord tag (e.g., `Username#1234`).
*   **`authorname`**: The message author's username (e.g., `Username`).
*   **`authoravatar`**: The URL of the message author's avatar.

**Channel Information:**

*   **`channel`**: The ID of the channel where the message was sent.
*   **`channelname`**: The name of the channel where the message was sent.

**Message Content:**

*   **`cleancontent`**: The message content with mentions like `@here` and `@everyone` removed.
*   **`content`**: The full message content.
*   **`rawcontent`**: The message content with _all_ mentions removed.

**Message Metadata:**

*   **`created`**: The date and time the message was created.
*   **`guildid`**: The ID of the guild (server) where the message was sent.
*   **`guildname`**: The name of the guild (server) where the message was sent.
*   **`id`**: The message ID.
*   **`url`**: A direct link to the message.
*   **`reference`**: The message ID of the message this message is replying to (if it's a reply).
*   **`thread`**: The thread ID of the message if it exists within a thread (otherwise undefined).
*   **`pinned`**: Returns `true` if the message is pinned, `false` otherwise.

**Attachment Information:**

*   **`allattachments`**: A newline-separated list of URLs for all attachments in the message.
*   **`allattachmentsname`**: A newline-separated list of filenames for all attachments in the message.
*   **`attachment`**: The URL of a specific attachment. Use `additional 1` to specify which attachment (e.g., `$msg[...;attachment additional 1]` for the first attachment).  Returns `undefined` if no attachment exists or the specified attachment doesn't exist.
*   **`attachmentname`**: The filename of a specific attachment. Use `additional 1` to specify which attachment (e.g., `$msg[...;attachmentname additional 1]` for the first attachment).  Returns `undefined` if no attachment exists or the specified attachment doesn't exist.

**Embed Information:**

*   **`embed`**: Returns the full embed object in JSON format. Use `additional 1` to specify which embed (e.g., `$msg[...;embed additional 1]` for the first embed). Returns an empty JSON object `{}` if no embed exists or the specified embed doesn't exist.
*   **`embedtitle`**: The title of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedcolor`**: The color of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embeddesc`**: The description of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedauthortext`**: The author text of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedauthorurl`**: The author URL of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedauthoricon`**: The author icon URL of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedimage`**: The image URL of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedthumbnail`**: The thumbnail URL of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedurl`**: The URL of a specific embed's title. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedfields`**: Returns embed fields like `NAME///VALUE///INLINE//////NAME 1///VALUE 1///INLINE 2..` of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.
*   **`embedfieldname`**: The name of a specific field within a specific embed. Use `additional 1` to specify the embed and `additional 2` to specify the field number. Returns `undefined` if no embed exists, the specified embed doesn't exist, or the specified field doesn't exist.
*   **`embedfieldvalue`**: The value of a specific field within a specific embed. Use `additional 1` to specify the embed and `additional 2` to specify the field number. Returns `undefined` if no embed exists, the specified embed doesn't exist, or the specified field doesn't exist.
*   **`embedfieldinline`**: Whether a specific field within a specific embed is displayed inline (`true` or `false`). Use `additional 1` to specify the embed and `additional 2` to specify the field number. Returns `undefined` if no embed exists, the specified embed doesn't exist, or the specified field doesn't exist.
*   **`embedtimestamp`**: The timestamp of a specific embed. Use `additional 1` to specify which embed. Returns `undefined` if no embed exists or the specified embed doesn't exist.

**Sticker Information:**

*   **`sticker`**: Returns a specific sticker in the message. Use `additional 1` to specify which sticker.
*   **`stickers`**: Returns all the stickers in the message, separated by `, `.

**Permission Checks:**

*   **`isdeleteable`**: Returns `true` if the command author has permission to delete the message, `false` otherwise.
*   **`isdeleted`**: Returns `true` if the message has been deleted, `false` otherwise.
*   **`iseditable`**: Returns `true` if the command author has permission to edit the message, `false` otherwise.
*   **`ispinnable`**: Returns `true` if the command author has permission to pin the message, `false` otherwise.
*   **`ispinned`**: Returns `true` if the message is pinned, `false` otherwise.

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