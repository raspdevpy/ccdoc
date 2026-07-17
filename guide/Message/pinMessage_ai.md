# $pinMessage

Pins a message in a channel. This action requires the bot to have the "Manage Messages" permission in the target channel.

## Functionality

The `$pinMessage` function allows you to pin either the message that triggered the command or a specific message by providing its channel and message IDs.  Pinned messages appear at the top of the chat for easy reference.

## Usage

There are two ways to use `$pinMessage`:

**1. Pin the Command Message:**

   ```bash
   $pinMessage
   ```

   This will pin the message that the command was used in. For example, if a user types `!pin This is important!` and the command includes `$pinMessage`, the message "This is important!" will be pinned.

**2. Pin a Specific Message:**

   ```bash
   $pinMessage[channelID;messageID]
   ```

   *   `channelID`: The ID of the channel containing the message you want to pin.  You can usually get the channel ID by right-clicking on the channel in Discord (with Developer Mode enabled) and selecting "Copy ID".
   *   `messageID`: The ID of the specific message you want to pin. You can usually get the message ID by right-clicking on the message in Discord (with Developer Mode enabled) and selecting "Copy ID".

   **Example:**

   To pin a message with the ID `123456789012345678` in the channel with the ID `987654321098765432`, you would use:

   ```bash
   $pinMessage[987654321098765432;123456789012345678]
   ```

**Important:** Ensure the bot has the necessary permissions ("Manage Messages") in the target channel to successfully pin messages.