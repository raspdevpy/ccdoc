# $messageExists

Checks if a message exists in a specified channel and returns `true` or `false`.

#### Usage:

`$messageExists[channelID;messageID]`

*   **channelID:** The ID of the channel where the message should be checked.
*   **messageID:** The ID of the message to check for.

<br/>

**Example:**

Let's say you want to check if a message with the ID `123456789012345678` exists in the channel with the ID `987654321098765432`.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageExists[987654321098765432;123456789012345678]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		true
	</discord-message>
</discord-messages>

In this example, if the message exists, the bot will return `true`. If the message doesn't exist, the bot will return `false`.

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Exists" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" />