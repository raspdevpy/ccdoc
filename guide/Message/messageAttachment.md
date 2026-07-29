# $messageAttachment

This function retrieves the URL of the first attachment found in a message. If a message has multiple attachments, only the URL of the first one will be returned.

#### Usage:

```
$messageAttachment
```

<br/>

#### Example:

This example demonstrates how `$messageAttachment` can be used.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $messageAttachment
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp
  </discord-message>
</discord-messages>

**Explanation:**

*   The member sends the command `!!exec $messageAttachment`.
*   The bot returns the URL of the first attachment in the member's message. If the message does not contain any attachment it will return an empty string.

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Attachment" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" />