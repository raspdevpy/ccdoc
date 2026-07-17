# `$sentMessageID`

Get the ID of the last sent message.

This function allows you to retrieve the message ID of the most recently sent message within your code.  This is particularly useful for subsequent actions you want to perform on that specific message, such as editing or deleting it.

## Usage

Simply use `$sentMessageID` in your commands to reference the last message's ID.

```bash
$sentMessageID
```

### Example: Deleting a Sent Message After 3 Seconds

This example demonstrates how to send a message, wait for 3 seconds, and then delete the message using its ID obtained with `$sentMessageID`.

```bash
$sendMessage[Hello World]
$wait[3s]
$deleteMessage[$sentMessageID]
```

**Explanation:**

1.  `$sendMessage[Hello World]`: Sends the message "Hello World" to the current channel.
2.  `$wait[3s]`: Pauses the script execution for 3 seconds.
3.  `$deleteMessage[$sentMessageID]`: Deletes the message whose ID is stored in the `$sentMessageID` function.  Since the `$sendMessage` command was executed immediately before, `$sentMessageID` contains the ID of the "Hello World" message.