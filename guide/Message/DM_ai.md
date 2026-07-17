# $DM <Badge type="danger" text="Premium ONLY!" vertical="middle" />

Sends the output of your code directly to the author via Discord Direct Message (DM), or to the specified user ID's DM.

#### Usage: `$dm[userID (optional)]`

**Explanation:**

*   The `$DM` function is used to send the result of the preceding code to a user's DM.
*   If no `userID` is provided, the message will be sent to the author of the command.
*   If a `userID` is provided, the message will be sent to the user with that ID.

<br/>

**Example:**

**Command Input:**
```
!!exec $DM[$authorID] This is a fantastic message!
```

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $DM[$authorID] This is a fantastic message!
	</discord-message>
</discord-messages>

**Result (Sent to the Command Author's DM):**

<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Your Custom Bot" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		This is a fantastic message!
	</discord-message>
</discord-messages>

::: tip Related Functions
*   [$sendDM](../Message/sendDM.md):  Send the output of the console to a DM message. (More control over the DM)
*   [$channelSendMessage](../Message/channelSendMessage.md): Send a message to a specific channel in the server.
*   [$sendMessage](../Message/sendMessage.md): Send a message to the channel where the command was used.
:::

**Difficulty:** <Badge type="warning" text="Medium" vertical="middle" />

**Tags:** <Badge type="tip" text="Send" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="DM" vertical="middle" /> <Badge type="tip" text="Send DM Message" vertical="middle" />