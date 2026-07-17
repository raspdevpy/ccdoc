# Library

## Basic Information
Library is one of the unique triggers, that doesn't get triggered by events in your server. A library can be included (referenced) in other commands so you can use the code in it after calling `$includeLibrary[Library name]`. 

The goal of this trigger is simply sharing code, functions or objects across multiple custom commands (see the example below).

## Syntax
The value of the trigger is the `Library name`.

## Example
### Create your library that contains users' information
> Note that the library name is `users`. We will use it in next step.

![](https://i.imgur.com/93WZesG.png)

### Create a normal word command `whois`
First, let's include the library, with `$includeLibrary`.
After including, we can directly use the object defined in the library and retrieve some information to display.

![](https://i.imgur.com/KQbkjrS.png)

### Output
![](https://i.imgur.com/v9DT5xR.png)

## What is the point?
In this example the object is only used in a single custom command. But at some point you might want to add another custom command using the same object, e.g. `listusers` sending a message with all users in it. When the object changes, e.g. you want to add another user to it, then you'll have to update the object in all custom commands accordingly. This takes time and there's a chance errors get introduced or one of the custom commands using this object is missed and now uses a different object. With a library you can use the same object across all these commands without having to copy it to each. Updating the object is done in a single place and all custom commands referencing (including) the library `users` will use the updated object at the same time.

In the same way you can also define functions in a library to share code across multiple custom commands.

That demonstrates a library's usefulness.

## Some functions related to Library
[$includeLibrary](../Useful/includeLibrary.md):   Include your library
