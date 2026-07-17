# $interactionReply

Sends a reply to an interaction (buttons, menus, slash commands).

#### Usage: `$interactionReply[message; ephemeral(yes/no); return id(yes/no)]`

**Parameters:**

*   `message`: The content of the reply message.
*   `ephemeral(yes/no)` (Optional):  Determines if the message should be ephemeral (only visible to the user who triggered the interaction).  Defaults to `no` if not specified.  Use `yes` for an ephemeral message.
*   `return id(yes/no)` (Optional): Determines if the function should return the message ID. Defaults to `no` if not specified.

::: tip Ephemeral Messages
Ephemeral messages are only visible to the user who triggered the interaction. Use them when you want to send a private response.  To make a message ephemeral, set the `ephemeral` parameter to `yes`.
:::

::: details Example

```
$interactionReply[Hello World;yes]
```

This code sends an ephemeral message to the user who triggered the interaction, displaying "Hello World".

![](https://cdn.discordapp.com/attachments/914682255346118687/937856596875313212/unknown.jpeg)

:::

::: warning Important
This function **only** works within interaction-based trigger types (like button clicks, menu selections, and slash command executions).
If you want to reply to a regular message, use the `$reply` function or the `{reply:messageId}` tag instead.
:::

::: tip Note
You can send embedded messages using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md). This allows for richer message styling, images, and more.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="reply" vertical="middle" /> <Badge type="tip" text="ephemeral" vertical="middle" /> <Badge type="tip" text="only you can see" vertical="middle" />