# Library

## Basic Information
Library is one of the unique triggers, that doesn't get triggered automatically
but only by you (the designer)

it helps you execute a code by calling `$includeLibrary[Library name]`

the goal of this trigger, is simply sharing a code or functions between custom commands (you will understand in the examples)

## Syntax
the value of this trigger is the `Library name`

## Example
### Create your library that contains users informations
> note that the library name is `users` we will use it in next step.

![](https://i.imgur.com/93WZesG.png)

### Create a normal word command `whois`
First let's include the library, with `$includeLibrary`
after including, we can directly use the object and retrieve some informations to display.

![](https://i.imgur.com/KQbkjrS.png)

### Output
![](https://i.imgur.com/v9DT5xR.png)

## What is the point?
Here we only included this library in 1 commands
what if we have 10 or 50 commands that uses these informations, you can easily use it without copy the user informations for each commands,
besides if you plan to add a new user, with library you will only add it to the `users` library
but without library, you would have to add the same users 50 times, to update every commands

that's demonstrate Library usefulness.


## Some functions related to Library
[$includeLibrary](../Unclassified/includeLibrary.md):   Include your library