# $userAvatar

Retrieves a user's avatar URL based on their user ID.

#### Usage: `$userAvatar[userID;size;dynamic;serverAvatar]`

**Parameters:**

*   `userID`: The ID of the user whose avatar you want to retrieve. You can use `$userID[Custom Command]` to get the ID of the user who triggered the command.
*   `size`: (Optional) The size of the avatar in pixels (e.g., `128`, `256`, `512`).  If omitted, a default size will be used.  Larger sizes might not always be available.
*   `dynamic`: (Optional)  Specify `yes` to retrieve a GIF avatar if the user has one.  Specify `no` (or omit the parameter) to always get a static image.
*   `serverAvatar`: (Optional) Specify `yes` to retrieve the user's server-specific avatar (if they have one) instead of their global avatar. Defaults to `no`.

<br/>

**Example:**

```discord
!!exec $userAvatar[$userID[Custom Command]]
```

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userAvatar[$userID[Custom Command]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordReaction image="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp"/>
	</discord-message>
</discord-messages>

**Explanation:** This example retrieves the avatar of the user who executed the command.

**Example with size and dynamic GIF:**

```discord
!!exec $userAvatar[$userID[Custom Command];256;yes]
```
This will retrieve the user's avatar with a size of 256x256 pixels. If the user has a GIF avatar, it will be retrieved as a GIF; otherwise, a static image will be returned.

**Example with server avatar:**

```discord
!!exec $userAvatar[$userID[Custom Command];;no;yes]
```
This will retrieve the user's server specific avatar. The size is set to default, dynamic gifs are disabled and the server avatar option is enabled.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="userID" vertical="middle" /> <Badge type="tip" text="user avatar" vertical="middle" />