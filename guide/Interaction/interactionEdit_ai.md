# $interactionEdit

Edits a previously sent interaction, typically one created using `$interactionReply`.

#### Usage: `$interactionEdit[New Message;message id (optional, defaults to the original interaction reply)]`

<br>

::: warning Important
This function only works within interaction-based triggers (e.g., slash commands, button clicks).  Do not use it in `exec` or other trigger types.
:::

<br/>

::: details Example
```
$interactionreply[Hello world!;yes]
$wait[2s]
$interactionedit[Bye World!]
```

This example first sends an interaction reply ("Hello world!"). After a 2-second delay, it edits that same message to "Bye World!".

![](https://cdn.discordapp.com/attachments/914682255346118687/937862286767435796/Screenshot_20220131210759.jpg)
:::

::: tip Note
You can send embeds using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md). This allows for rich message formatting including titles, descriptions, fields, and more!
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="interaction" vertical="middle" /> <Badge type="tip" text="edit" vertical="middle" /> <Badge type="tip" text="ephemeral" vertical="middle" /> <Badge type="tip" text="reply" vertical="middle" /> <Badge type="message" text="edit" vertical="middle" />