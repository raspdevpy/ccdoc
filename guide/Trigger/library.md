# Library

## Basic Information
Library is one of the unique triggers, that doesn't get triggered by events in your server. It can be included in other commands so you can use the code in it by calling `$includeLibrary[Library name]`

The goal of this trigger is simply sharing code or functions between custom commands (you will understand in the examples)

## Syntax
the value of the trigger is the `Library name`

## Example
### Create your library that contains users' information
> note that the library name is `users`. We will use it in next step.

![](https://i.imgur.com/93WZesG.png)

### Create a normal word command `whois`
First let's include the library, with `$includeLibrary`
after including, we can directly use the object and retrieve some information to display.

![](https://i.imgur.com/KQbkjrS.png)

### Output
![](https://i.imgur.com/v9DT5xR.png)

## What is the point?
Here we only included this library in 1 commands
what if we have 10 or 50 commands that uses this information, you can easily use it without copying the user information for each command,
besides if you plan to add a new user, with libraries you will only add it to the `users` library
but without libraries, you would have to add the same users 50 times, to every command

That demonstrates Library's usefulness.


## Some functions related to Library
[$includeLibrary](../Useful/includeLibrary.md):   Include your library
