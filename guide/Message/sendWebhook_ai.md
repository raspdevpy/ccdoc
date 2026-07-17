# $sendWebhook

Sends a message via a Discord webhook using its ID and token.

#### Usage: `$sendWebhook[webhookID;webhookToken;message;return message ID (yes/no, optional);username (optional);avatar URL (optional)]`

*   **webhookID:** The ID of the webhook.
*   **webhookToken:** The token of the webhook.
*   **message:** The message content to send.
*   **return message ID (optional):**  If set to `yes`, the function will return the ID of the sent message. Defaults to `no`.
*   **username (optional):**  The username to display for the webhook message. If not provided, the webhook's default name will be used.
*   **avatar URL (optional):**  The URL of the avatar to display for the webhook message.  If not provided, the webhook's default avatar will be used.

#### Example:

```discord
!!exec $sendWebhook[98723xxxx...;K9oJxxxx...;Hello world!]
```

```discord
Webhook: Hello world!
```

::: tip
You can customize the `username` and `avatar URL` parameters to display different names and avatars for each message.
:::

::: tip Note
You can send complex messages with embeds using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md).
:::

::: warning Warning!
For non-premium bots, this function will behave exactly as `$sendMessage` due to rate limit avoidance mechanisms.
:::

##### Function difficulty: <Badge type="warning" text=" Medium" vertical="middle" />
###### Tags: <Badge type="tip" text="webhook" vertical="middle" /> <Badge type="tip" text="message" vertical="middle" />