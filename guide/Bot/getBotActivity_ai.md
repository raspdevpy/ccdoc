# $getBotActivity <Badge type="danger" text="Premium ONLY!" vertical="middle" />

Retrieves the bot's current activity status (e.g., "Playing...", "Listening to...", "Watching...", "Competing in...").

## Usage

```bash
$getBotActivity[text/type]
```

**Parameters:**

*   `text`:  Returns the text displayed in the bot's activity status (e.g., "The Cosmos").
*   `type`: Returns the type of activity the bot is doing. (e.g. "PLAYING", "LISTENING", "WATCHING", "COMPETING")

## Example

This example demonstrates how to use `$getBotActivity[text]` to display the bot's current activity text.

![Example Screenshot](https://i.imgur.com/KyYqUGU.png)

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $getBotActivity[text]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    The Cosmos
  </discord-message>
</discord-messages>