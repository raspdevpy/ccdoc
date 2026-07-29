# $commandName

Returns the name of the slash command that triggered the current execution.

::: tip Trigger
This function only works within the context of a [slash command](../Trigger/slash.md).
:::

## Usage

```bash
$commandName
```

## Example

This example demonstrates how to use `$commandName` to display the name of the command that was executed.

### Code

```bash
$interactionReply[:game_die: $random[1;6]]
$interactionReply[Command ran: `$commandName`]
```

### Result

![Result](https://cdn.discordapp.com/attachments/957286111250624552/1091079914133934120/image.png)

The bot will roll a dice and then reply with the result and the name of the command used. For example, if the command was `/roll`, the bot might respond with: `:game_die: 4 Command ran: \`roll\``

## Related Functions

*   [Slash command](../Trigger/slash.md): Learn how to create and trigger slash commands.
*   [$interactionReply](../Interaction/interactionReply.md):  Send a reply to the interaction that triggered the command.
*   [$getOption](../Interaction/getOption.md): Retrieve the value of an option provided by the user in the slash command.