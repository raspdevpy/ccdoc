# $messageFlags

This function retrieves the flags associated with a message. Message flags provide additional information about the message, such as whether it's a crosspost or if it's a system message.

#### Usage: `$messageFlags`

<br/>

Here's a simple example demonstrating how to use `$messageFlags`:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Flags: $messageFlags
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Flags: 
	</discord-message>
</discord-messages>

**Explanation:**

*   The user types `!!exec Flags: $messageFlags`.
*   The bot executes the command and replaces `$messageFlags` with the actual flags of the triggering message.
*   The bot then replies with "Flags:" followed by the flags (if any) for that message.  If there are no flags, the output will simply be "Flags:".

##### Function difficulty: <Badge Flags="tip" text="Easy" vertical="middle" />

###### Tags: <Badge Flags="tip" text="Flags" vertical="middle" /> <Badge Flags="tip" text="message" vertical="middle" />