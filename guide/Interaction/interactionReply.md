# $interactionReply
Sends a reply to an interaction. `(buttons/menus/slash commands)`

#### Usage: `$interactionReply[message;ephemeral(yes/no) (optional);return id (yes/no)]`

::: tip Ephemeral Message
This type of the message can only seen by the author.
Use it by setting the ephemeral field to yes `$interactionreply[message;yes]`
:::



::: details

```
   $interactionreply[Hello World;yes]
```
![](https://cdn.discordapp.com/attachments/914682255346118687/937856596875313212/unknown.jpeg)
:::

::: warning This function only works for interactions, don't use in others triggertypes
If you want a reply to a message use `$reply` or `{reply:messageId}` instead
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="reply" vertical="middle" /> <Badge type="tip" text="ephemeral" vertical="middle" /> <Badge type="only you can see" text="ephemeral" vertical="middle" />