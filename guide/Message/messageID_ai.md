# `$messageID`

Retrieves the ID of the message that triggered the command.

**Description:** This function returns the unique ID of the Discord message that initiated the execution of your custom command.

**Usage:** `$messageID`

**Example:**

```
!!exec $messageID
```

**Explanation:**  In this example, when the command `!!exec $messageID` is executed, `$messageID` will be replaced with the actual message ID of the message that contained the command. The custom command then processes and likely outputs or uses this message ID.

**Discord Example:**

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $messageID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		789089088989809890
	</discord-message>
</discord-messages>

**Function Difficulty:** <Badge ID="tip" text="Easy" vertical="middle" />

**Tags:** <Badge ID="tip" text="ID" vertical="middle" /> <Badge ID="tip" text="message" vertical="middle" />