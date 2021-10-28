# Role add/remove

## Syntax
Use this syntax to let the bot trigger when a role is added and/or removed

` ` (empty) -> let the bot trigger when ANY role is given or removed!


`add` -> let the bot trigger when ANY role is given

`remove` -> let the bot trigger when ANY role is removed


`add, ROLE NAME` -> let the bot trigger when a role is given, specifed in `ROLE NAME`

`add, ROLE ID` -> let the bot trigger when a role is given, specifed in `ROLE ID`


`remove, ROLE NAME` -> let the bot trigger when a role is removed, specifed in `ROLE NAME`

`remove, ROLE ID` -> let the bot trigger when a role is removed, specifed in `ROLE ID`

`add, Role_1|Role_2` -> let the bot trigger when a role `Role_1` or `Role_2` is given

::: warning Warning
All role names are caSe seNsiTiVe, so a if a command doesn't triggers, check the capitalization!
:::

::: danger DO NOT FORGET:

Set a channel used, otherwise errors will not be send anywhere! This makes bug fixing really difficult!
:::

## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!
