# Channel add/remove

## Syntax
Use this syntax to let the bot trigger when a channel is added or removed or both

` ` (empty) -> trigger when channel is removed or added
`add` -> trigger when a channel is created
`add=category id` -> trigger when a channel is being created in category with id `category id`

`remove` -> trigger when a channel is removed
`remove=category id` -> trigger when a channel is being deleted in category with id `category id`

## Related Functions
The following list is a functions that you might need:
`$eventChannelID`: will return the channel id that got created/removed
`$eventChannelParent`: will return the channel's category id

## Example
### Let's make a command with `add` as value to only trigger when someone create channel
### and post it in `log` channel
![Example Image](https://cdn.discordapp.com/attachments/959521105293475880/993601592160956506/unknown.png)

### the output when i create a channel named `newly-born`
![Output Image](https://cdn.discordapp.com/attachments/959521105293475880/993602175395696661/unknown.png)


## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!
