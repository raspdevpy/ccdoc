# $interactionReply
Sends a message reply to an interaction. `(buttons/menus/slashs)`
::: tip This function allow messages that only you can see
by setting the ephemeral field to yes `$interactionreply[message;yes]`
::

#### Usage: `$interactionReply[message;ephemeral(yes/no) (optional);return id (yes/no)]
`

::: details
```
   $interactionreply[Hello World;yes]
```
![](https://cdn.discordapp.com/attachments/914682255346118687/937856596875313212/unknown.jpeg)
:::

::: warning This function only respond interactions, don't use in others triggertypes
If you want to reply a message, not an interaction, try `$reply` or `{reply:messageId}`
::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="reply" vertical="middle" /> <Badge type="tip" text="ephemeral" vertical="middle" /> <Badge type="only you can see" text="ephemeral" vertical="middle" />