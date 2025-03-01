# $deleteMessage

Deletes a specified message from a channel.

#### Usage: `$deleteMessage[channelID;messageID]`

*   **`channelID`**: The ID of the channel where the message is located.
*   **`messageID`**: The ID of the message to delete.

#### Example:

`$deleteMessage[$channelID;$messageID]`

This example will delete the message with the ID specified in `$messageID` from the channel with the ID specified in `$channelID`.  Make sure your bot has the necessary permissions to delete messages in the specified channel.

::: tip Related Functions
[$deletecommand](../Message/deletecommand.md) -  Use this function to delete the message that triggered the command.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="delete message" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="delete" vertical="middle" /> <Badge type="tip" text="delete trigger" vertical="middle" />