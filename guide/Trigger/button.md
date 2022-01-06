# Button Click

## Basic Information
This trigger type, will trigger when a user interacts with a button. This needs to be a button send by the bot! 

#### Example of a button:

![](https://media.discordapp.net/attachments/772051120368910371/880527140817367070/first-button.gif)



## Syntax
Use this syntax to let the bot trigger when the ID from a button is detected!

`test` -> If this is filled in in the trigger field, the command will trigger when the ID from the button is `test`


`button_1|button_2` -> If this is filled in in the trigger field, the command will trigger when the ID from the button is `button_1` OR `button_2`


::: warning Warning
All button IDs are caSe seNsiTiVe, so a if a command doesn't triggers, check the capitalization!
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

### Related Functions
* `$buttonID` returns the button id
* `$buttonEmoji` returns the button emoji
* `$buttonLabel` returns the button label
* `$buttonURL` returns the button url
* `$buttonStyle` returns the button style
* `$buttonIsDisabled` returns true/false button disabled

## More Info

Do you want to know more, about the bot's syntax? You can check out [this](../../guide/syntax.md) page to learn more!
