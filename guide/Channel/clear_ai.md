# $clear

Clears messages from a channel. You can clear messages from a specific user, or clear all messages in the channel.

#### Usage:

`$clear[amount;userID or everyone(optional);channelID (optional)]`

**Parameters:**

*   `amount`: The number of messages to clear (maximum 100).
*   `userID` (optional): The ID of the user whose messages you want to clear. If omitted, or set to `everyone`, all messages will be cleared.
*   `channelID` (optional): The ID of the channel to clear messages from. If omitted, the current channel is used.

**Example:**

**Before:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
	<discord-message :bot="false" role-color="#4cfdc8" author="Good Moderator">
		!!exec $clear[10;everyone] $sendMessage[<strong>Channel has been purged</strong>]
	</discord-message>
</discord-messages>

**After:**

<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<strong>Channel has been purged.</strong>
	</discord-message>
</discord-messages>

::: warning
You can clear a maximum of 100 messages at a time.  Messages older than 2 weeks cannot be cleared.
:::

#### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" />
