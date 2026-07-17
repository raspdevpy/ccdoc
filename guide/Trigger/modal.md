# Modal (Form) Interaction

## Basic Information
This trigger type will trigger when a user submits a modal. 

## Syntax
the value is the modal id, for example:

`modal_1` -> will trigger only when a user submits a modal with id `modal_1`

`modal_1|modal_2` -> will trigger only when a user submits a modal with id `modal_1` or `modal_2`

## Example
### let's first send a button (with id apply-form) using [$button](../Trigger/button.md)
![](https://i.imgur.com/Pmvl0XZ.png)

### let's make a command to send a modal (with id mymodal) when user click the button using [$modal](../Interaction/modal.md)
![](https://i.imgur.com/T4fpwhF.png)

#### And that's what will happen when user click on the button
![](https://i.imgur.com/Z6fbIsU.png)

### now let's make a new command to respond to the modal submit
Trigger type to be `Modal`, Trigger value to be the modal id, in this case `mymodal`

To get what user input in the modal, we will use [$modalAnswer](../Interaction/modalAnswer.md)

![](https://i.imgur.com/nWI9q9E.png)

### now save and test by submitting the modal
![](https://i.imgur.com/val8aUC.png)

### that's it! :tada:

## Some functions related to Modal Trigger
[$modalID](../Interaction/modalID.md):   Return the modal's id that triggered the command

[$modalAnswer](../Interaction/modalAnswer.md): Return a data user input in submitting the modal

::: danger
You need to send a modal with [$modal](../Interaction/modal.md) within 1 second of button/menu/slash execution
:::

###### Tags: <Badge type="tip" text="modal" vertical="middle" /> <Badge type="tip" text="trigger" vertical="middle" />
