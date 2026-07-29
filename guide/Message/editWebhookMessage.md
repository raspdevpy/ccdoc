# $editWebhookMessage

This command allows you to edit a message that was sent by a webhook. You'll need the webhook's ID, token, and the message ID of the message you want to modify.

## Syntax

```
$editWebhookMessage[Webhook ID;Webhook Token;Message ID;New Content;Thread ID (Optional)]
```

## Parameters

*   **`Webhook ID`**: The ID of the webhook that sent the message.  This is typically a long number.
*   **`Webhook Token`**: The token for the webhook. Treat this like a password!  Keep it secret!
*   **`Message ID`**: The ID of the specific message you want to edit.  This is also typically a long number.
*   **`New Content`**: The updated content you want to replace the original message with.  This is the text that will be displayed in the edited message.
*   **`Thread ID (Optional)`**:  If the message is in a thread, you'll need to provide the thread ID for the message to be edited correctly. If the message isn't in a thread, leave this parameter blank.

## Example

Let's say you have a webhook with the ID `123456789012345678`, the token `abcdefg1234567890abcdefg1234567890`, and you want to edit a message with the ID `987654321098765432`.  You want to change the message to "Hello, world! This message has been edited."

```
$editWebhookMessage[123456789012345678;abcdefg1234567890abcdefg1234567890;987654321098765432;Hello, world! This message has been edited.]
```

If the message was in a thread with the ID `555555555555555555`, the command would look like this:

```
$editWebhookMessage[123456789012345678;abcdefg1234567890abcdefg1234567890;987654321098765432;Hello, world! This message has been edited.;555555555555555555]
```