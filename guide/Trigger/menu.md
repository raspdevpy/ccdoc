# Menu Interaction

## Basic Information
This trigger type, will trigger when a user interacts with a menu. This needs to be a menu send by the bot! 

## Syntax
Use this syntax to let the bot trigger when the ID from a interaction menu is detected!

`test` -> If this is filled in in the trigger field, the command will trigger when the ID from the menu is `test`


`menu_1|menu_2` -> If this is filled in in the trigger field, the command will trigger when the ID from the menu is `menu_1` OR `menu_2`


::: warning Warning
All IDs are caSe seNsiTiVe, so a if a command doesn't triggers, check the capitalization!
:::

::: info Info
Button and Dropdown triggertype uses regex to match the trigger field.
So id with the same will interfere with each other.
For Example:
* menu 1 id = test
* menu 2 id = testone
* Menu 2 could get triggered ,if you use menu 1 since it matches `test`
##### Resolving the Problem
Just change your id to `^id$`
In regex ^ and $ are used to match the start and end of the string.
:::

## Creating a Menu
Check here for creating a menu: [Menu](../Text/Components/menu.md)


## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!