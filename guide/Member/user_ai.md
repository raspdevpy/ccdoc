# $user

This compact function provides a wealth of information about a user, all in one place!

### Usage: `$user[userid;property]`

To use the `$user` function, you need to specify the user's ID and the property you want to retrieve.

#### Supported Properties:

Here's a breakdown of the properties you can access:

*   **`name`**:  The user's username (e.g., `MyUser`).
*   **`id`**: The user's unique ID (e.g., `123456789012345678`).
*   **`tag`**: The user's full tag (username and discriminator) (e.g., `MyUser#1234`).
*   **`discrim`**: The user's discriminator (the four-digit number after the username) (e.g., `1234`).
*   **`mention`**:  The user's mention string, allowing you to ping them directly (`<@123456789012345678>`).
*   **`avatar`**: The URL of the user's avatar image.
*   **`isbot`**: Returns `true` if the user is a bot, and `false` otherwise.
*   **`banner`**: Returns the URL of the user's profile banner, if they have one. Returns `undefined` if the user doesn't have a banner or hasn't been cached. **Note:** Requires the user to be cached for this to work.
*   **`created`**:  The date and time the user's account was created (e.g., `2023-10-27T10:00:00.000Z`).
*   **`timestamp`**: A Unix timestamp representing the creation date and time of the user's account (e.g., `1698400800000`).

<br/>

#### Example: Getting the Username of the Author

Here's an example of how to use the `$user` function to retrieve the name of the message's author:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $user[$authorID;name]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Member
	</discord-message>
</discord-messages>

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="compact" vertical="middle" /> <Badge type="tip" text="user" vertical="middle" />