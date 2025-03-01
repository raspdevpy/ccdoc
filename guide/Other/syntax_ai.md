# Syntax

Learn about the syntax used by the bot to understand how to write commands and scripts!

## Syntax Overview

The bot's code primarily uses two fundamental types:

1.  [Text](#what-is-text)
2.  [Function](#what-is-a-function)

## What is Text?

Anything in the code that isn't a [function](#what-is-a-function) is considered text.

For example, in the following code snippet:

```
Hello $username to our server
```

*   `Hello`: This is text.
*   [`$username`](../Member/username.md): This is a function.
*   `to our server`: This is text.

## What is a Function?

A function is a special instruction that begins with a `$` symbol, like [`$username`](../Member/username.md).

In this example:

```
Hello $username to our server
```

[`$username`](../Member/username.md) is the only function present.

### Function Actions

Functions generally perform one of these three actions:

*   **Replace with a value:** The function is replaced by a specific value.
*   **Perform an action:** The function executes a task.
*   **Perform an action and replace with a value:** The function executes a task and then is replaced by a specific value.

For example, running this code:

```
Hello $username, welcome to our server!
```

Will result in the bot sending:

```
Hello Mido, welcome to our server!
```

This demonstrates that the [`$username`](../Member/username.md) function is of the "Replace with a value" type. It's replaced by the username of the command executor.

::: tip Function Return Values and Actions

*   A function that `Replaces with a value` is also said to `return` that value. Check the function documentation to understand what it returns. For example:
    [`$username`](../Member/username.md) ***Returns*** the name of the user that executed the command.

*   A function that `Performs an Action` will have its description begin with a verb describing that action. For example:
    [`$title`](../Embed/title.md) ***Adds*** a title to a message.
:::

### Function Input

Some functions require input from you to customize their behavior. The format is as follows:

```
$function[Inputs]
```

We previously used [`$username`](../Member/username.md) without any input. This is because, as its documentation specifies, it defaults to returning the executor's name.  To get someone else's username, you need to provide their User ID as input.

Let's say we want to get Rake's name instead of Mido's. We first need Rake's User ID (e.g., 1234) and then input it into [`$username`](../Member/username.md):

```
Hello $username[1234]
```

Output:

```
Hello Rake
```

### Multiple Inputs

Some functions, like `$channelSendMessage`, require multiple inputs.  It needs:

*   The Channel ID to send to.
*   The Message Content.

Let's assume the channel ID is `1234` and the content is `Hello $username`.  To provide these inputs to the function, we separate them with a semicolon (`;`):

```
$channelSendMessage[1234;Hello $username]
```

Output (in channel with ID 1234):

```
Hello Mido
```

Note:  [`$channelSendMessage`](../Message/channelSendMessage.md) does not get replaced by a value; it only performs an action (sending a message).

::: tip Case Insensitivity
Function names are not case-sensitive.  `$authorID` and `$aUtHoRiD` will function identically!
:::

## Expressions

Some functions require you to provide an "expression" as input.

In these cases, please refer to the [Expressions](../CodeReferences/ref.expression.md) documentation for detailed information.

## Escaping Characters

Certain characters can cause unexpected behavior and need to be "escaped." For example, if you want to send the literal text `$username` instead of having it replaced with the username:

Code:

```
To get username use function: $username
```

Output:

```
To get username use function: Mido
```

To prevent the `$` from being interpreted as the start of a function, you need to "escape" it by adding a backslash (`\`) before it:

```
To get username use function: \$username
```

Output:

```
To get username use function: $username
```

Other characters that may need escaping include:

`[`, `]`, `;`, `:`, `>`, `<`, `=`, `{`, `}`

## Encoded Character Codes (Alternative to `\`)

Instead of using backslashes, you can use these encoded character codes to represent special characters:

```js
#RIGHT# =>> [
#LEFT# =>> ]
#SEMI# =>> ;
#COLON# =>> :
#DOLLAR# =>> $
#CHAR# =>> $
#RIGHT_CLICK# =>> >
#LEFT_CLICK# =>> <
#EQUAL# =>> =
#RIGHT_BRACKET# =>> {
#LEFT_BRACKET# =>> }
#NL# =>> New line
#BR# =>> New line
#SP# =>> Space
#TAB# =>> Tab (few spaces)
#SLASH# =>> /
#BACKSLASH# =>> \
```