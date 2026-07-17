# `$hasRole`

Determines if a user possesses a specific role within the server. Returns `true` if the user has the role, and `false` otherwise.

#### Usage: `$hasRole[userID;roleID]`

*   **userID:** The ID of the user you want to check. You can use `$authorID` to check the message author.
*   **roleID:** The ID of the role you want to check for.

<br/>

**Example:**

Checks if the message author has the role with the ID `99871..xx`.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $hasRole[$authorid;99871..xx]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		false
	</discord-message>
</discord-messages>

<br/>

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="has" vertical="middle" /> <Badge type="tip" text="role" vertical="middle" />