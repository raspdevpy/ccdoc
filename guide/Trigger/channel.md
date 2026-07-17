# Channel add/remove

## Syntax
Use this syntax to let the bot trigger when a channel is added or removed or both

` ` (empty) -> trigger when channel is removed or added

`add` -> trigger when a channel is created

`add=category id` -> trigger when a channel is being created in category with id `category id`

`add, channel type` -> trigger when new channel/thread of certain type created, such as `post, text, voice, category,..`


`remove` -> trigger when a channel is removed
`remove, channel type` -> trigger when certain type of channel is being removed like `post, text, voice, category`

`remove=category id` -> trigger when a channel is being deleted in category with id `category id`

::: tip Supported Channel Types
You can see the whole list [here.](../CodeReferences/ref.channel_types.md)
:::

## Related Functions
The following list is functions that you might need:

[$eventChannelID](../Channel/eventChannelID.md): will return the channel id that got created/removed

`$eventChannelParent`: will return the channel's category id

## Example
### Let's make a command with `add` as value to only trigger when someone create channel
### and post it in `log` channel
![Example Image](https://i.imgur.com/yCoWNFr.png)

### the output when i create a channel named `newly-born`
![Output Image](https://i.imgur.com/R4bgKyv.png)
