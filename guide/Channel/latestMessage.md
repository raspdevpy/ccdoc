# $latestMessage

Retrieves the most recent message content or ID from a channel, utilizing the cache for efficiency.

## Usage

```bash
$latestMessage[Channel ID (defaults to current channel);User ID (defaults to all users);Return Message ID instead (yes/no, defaults to no)]
```

**Explanation:**

*   **Channel ID:** The ID of the channel to search within. If omitted, it defaults to the channel where the command is executed (`$channelID`).
*   **User ID:**  The ID of a specific user to filter messages by. If omitted, it includes messages from all users (`everyone`).
*   **Return Message ID:** A boolean value (`yes` or `no`) that determines whether to return the message's ID instead of its content.  Defaults to `no`, returning the message content.

## Examples

### Example 1: Return the Latest Message Content

This example retrieves the content of the most recent message in the current channel.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $latestMessage[$channelID]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    Hello World
  </discord-message>
</discord-messages>

### Example 2: Return the Latest Message ID

This example retrieves the ID of the most recent message from any user in the current channel.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $latestMessage[$channelID;everyone;yes]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    1234567890
  </discord-message>
</discord-messages>