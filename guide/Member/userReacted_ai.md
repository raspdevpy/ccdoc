# `$userReacted`

Checks if a specific user has reacted to a message with a particular reaction, or checks which users reacted to a message.

#### Usage: `$userReacted[channelID (optional);messageID;UserID;Reaction]`

*   **`channelID` (optional):** The ID of the channel where the message is located. If omitted, the current channel is assumed.
*   **`messageID`:** The ID of the message to check for reactions.
*   **`UserID`:** The ID of the user to check for their reaction.  Use `$authorID` to check the command executor. If left blank, the function will check for *any* user reacting with the given reaction.
*   **`Reaction`:** The reaction (emoji) to check for (e.g., `smile`, `👍`, or a custom emoji name).

<br/>

**Example:** Check if the command executor reacted with "smile" to message 900774533387124818 in channel 809325522529288242:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userReacted[809325522529288242;900774533387124818;$authorID;smile]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		 false
	</discord-message>
</discord-messages>

::: tip Important: Member Caching
If you're using the main bot, ensure the member is cached to obtain accurate results.  This is usually handled automatically. You can disregard this message if you are using a custom bot.
:::

**Returns:** `true` if the user reacted with the specified reaction; otherwise, `false`.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="reaction" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" />