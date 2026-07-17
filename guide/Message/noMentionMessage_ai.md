# `$noMentionMessage`

The `$noMentionMessage` function returns the content of the message sent by the command executor, but with all mentions removed. This is particularly useful for preventing your bot from accidentally pinging roles or users when echoing user input or using it in other command logic.

#### Usage:

`$noMentionMessage`

This function doesn't require any parameters. It simply returns the message content with mentions stripped out.

#### Example:

Let's say you want to echo the user's message in a custom command, but you don't want the bot to actually ping anyone they mentioned.

Here's how it would look in Discord:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec <DiscordMention :highlight="true">Server Moderator</DiscordMention> testing [$noMentionMessage] ($message)
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<DiscordMention :highlight="true">Server Moderator</DiscordMention> [testing] (<DiscordMention :highlight="true">Server Moderator</DiscordMention> testing)
	</discord-message>
</discord-messages>

In this example, even though the user mentioned "Server Moderator", the bot only mentions them once and then includes "testing" (the message with mentions removed). The original message including the mention is also included.

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="mentions" vertical="middle" /> <Badge type="tip" text="disable mentions" vertical="middle" /> <Badge type="tip" text="ping" vertical="middle" />