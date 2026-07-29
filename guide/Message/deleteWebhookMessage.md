# Delete Webhook Message

This function deletes a message sent by a webhook.

## Usage

The `$deleteWebhookMessage` function requires the Webhook ID, Token, and the ID of the message you want to delete.  Optionally, you can also specify a Thread ID if the message is within a thread.

```markdown
$deleteWebhookMessage[Webhook ID;Webhook Token;Message ID;Thread ID (optional)]
```

## Parameters

*   **Webhook ID:** The ID of the webhook.
*   **Webhook Token:** The token of the webhook.
*   **Message ID:** The ID of the message you want to delete.
*   **Thread ID (Optional):**  The ID of the thread the message is in.  This is only needed if the message is in a thread.  If the message is not in a thread, you can omit this parameter.

## Example

Let's say you have a webhook with the ID `123456789012345678` and the token `abcdefghijklmnopqrstuvwxyz1234567890`, and you want to delete message with ID `987654321098765432`.  The message is not in a thread.  You would use the following:

```markdown
$deleteWebhookMessage[123456789012345678;abcdefghijklmnopqrstuvwxyz1234567890;987654321098765432]
```

If the message *is* in a thread with the ID `555555555555555555`, you would use:

```markdown
$deleteWebhookMessage[123456789012345678;abcdefghijklmnopqrstuvwxyz1234567890;987654321098765432;555555555555555555]
```