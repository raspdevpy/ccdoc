# $commandName

A simple function, which returns the name of a slash command ran.
::: tip Trigger
This function works only with [slash commands](../Trigger/slash.md).
:::

## Usage

```bash
$commandName
```

## Example
### Code
```bash
$interactionReply[:game_die: $random[1;6]]
$interactionReply[Command ran: `$commandName`]
```
### Result
![Result](https://cdn.discordapp.com/attachments/957286111250624552/1091079914133934120/image.png)

## Related functions
+ [Slash command](../Trigger/slash.md)
+ [$interactionReply](../Interaction/interactionReply.md)
+ [$getOption](../Interaction/getOption.md)
