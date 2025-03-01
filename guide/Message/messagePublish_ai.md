# $messagePublish

Publishes a message to an announcement channel. This command allows you to easily share a message from one channel to another, typically an announcement channel.

#### Usage:

You can use `$messagePublish` in three ways:

*   **`$messagePublish`**:  If executed in the same channel as the message you want to publish, it will publish the message that triggered the command.

*   **`$messagePublish[messageID]`**: Publishes the message with the specified `messageID` from the current channel. Replace `messageID` with the actual ID of the message you wish to publish.

*   **`$messagePublish[channelID;messageID]`**: Publishes the message with the specified `messageID` from the specified `channelID`. Replace `channelID` with the ID of the channel containing the message, and `messageID` with the ID of the message itself.

##### Examples:

*   To publish the message triggering the command:
    ```
    $messagePublish
    ```

*   To publish a message with the ID `123456789012345678` from the current channel:
    ```
    $messagePublish[123456789012345678]
    ```

*   To publish a message with the ID `123456789012345678` from the channel with the ID `987654321098765432`:
    ```
    $messagePublish[987654321098765432;123456789012345678]
    ```

##### Function Difficulty: <Badge text="Easy" type="tip" />

##### Tags: <Badge text="Publish" type="tip" /> <Badge text="Message" type="tip" />