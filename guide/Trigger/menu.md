# Menu Interaction

## Basic Information
This trigger type will trigger when a user selects an option in a menu. 

## Syntax
the value is the menu id, for example:

`test` -> will trigger only when a user selects an option in a menu with id `test`

`menu_1|menu_2` -> will trigger only when a user selects an option in a menu with id `menu_1` or `menu_2`

## Example
### let's first send a menu (with id mymenu) with some options using [$selectMenu](../Text/Components/selectMenu.md)
![](https://i.imgur.com/TqPNG4N.png)

### let's make a new command to respond when user select an option in this menu
Trigger type to be `Menu`, Trigger value to be the menu id, in this case `mymenu`

Now to know which option the user selected, we will use a function `$eventSelected`

![](https://i.imgur.com/G41cLKl.png)

### now save and let's test by selecting rake
![](https://i.imgur.com/ZulHZJz.gif)

### that's it! :tada:

## Some functions related to Menu Trigger
`$eventSelected`:   Return the option's value that user selected

`$menuId`: Return the menu id that triggered the command
