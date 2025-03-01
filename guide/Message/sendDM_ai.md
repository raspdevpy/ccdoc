# $sendDM <Badge type="danger" text="Premium ONLY!" vertical="middle" />

Sends the output of the code to the message author's DMs or to the DMs of a specified user.

#### Usage: `$sendDM[userID;message]`

*   `userID`: (Optional) The ID of the user to send the DM to. If omitted, the DM will be sent to the message author.
*   `message`: The message to send in the DM.

<br/>

**Example 1: Sending a DM to the message author multiple times.**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $sendDM[$authorID;I can add this multiple times in my code! This is time 1]
        $sendDM[$authorID;I can add this multiple times in my code! This is time 2]
	</discord-message>
</discord-messages>

<br/>

<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Your Custom Bot" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I can add this multiple times in my code! This is time 1
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Your Custom Bot" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		I can add this multiple times in my code! This is time 2
	</discord-message>
</discord-messages>

::: tip Note
You can send embeds using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md).  This allows you to create richly formatted messages within the DM.
:::

::: tip Related Functions
*   [`$channelSendMessage`](../Message/channelSendMessage.md): Sends a message to a specific channel in the server.
*   [`$sendMessage`](../Message/sendMessage.md): Sends a message to the channel where the command was used.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="DM" vertical="middle" /> <Badge type="tip" text="send DM Message" vertical="middle" />