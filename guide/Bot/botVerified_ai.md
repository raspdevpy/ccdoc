# $botVerified

This function checks if a Discord bot is verified. A verified bot has been reviewed and approved by Discord.

## Usage

```bash
$botVerified[Bot ID]
```

**`Bot ID`**: The ID of the bot you want to check.  You can find this by right-clicking on the bot in Discord (with Developer Mode enabled) and selecting "Copy ID."

## Examples

Here are a couple of examples demonstrating how `$botVerified` works.

### Example: Verified Bot

In this example, we check if the bot with the ID `725721249652670555` is verified.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $botVerified[725721249652670555]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    true
  </discord-message>
</discord-messages>

The function returns `true` because the bot with ID `725721249652670555` is verified.

### Example: Unverified Bot

In this example, we check if the bot with the ID `582019849073590274` is verified.

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $botVerified[582019849073590274]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    false
  </discord-message>
</discord-messages>

The function returns `false` because the bot with ID `582019849073590274` is not verified.