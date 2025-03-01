# $argsCheck

This function checks if the user has provided the correct number of arguments. It's useful for ensuring your commands receive the expected input.

## How it Works

`$argsCheck` verifies if the number of arguments provided by the user matches the required amount. You specify the expected number of arguments and an optional error message.  If the user provides an incorrect number of arguments, the error message is sent (if provided) and the bot will stop executing further code in that command.

## Syntax

```bash
$argsCheck[(>/</none)number;error message]
```

**Breakdown:**

*   **(</>/none)**: This specifies the type of comparison.  Choose one of the following:
    *   `<`:  Less than the specified `number`.
    *   `>`:  Greater than the specified `number`.
    *   `none`: (optional -  if omitted, this is the default).  Equal to the specified `number`.  Using no comparator means it expects *exactly* the specified number of arguments.
*   **number**: A positive integer representing the expected number of arguments.
*   **error message**: (Optional) The message to send to the user if the argument check fails. If omitted, no message is sent.

## Examples

**1. Checking for Exactly 2 Arguments:**

```bash
$argsCheck[2;Please provide two arguments.]
```

This checks if the user provides exactly two arguments. If not, it sends the message "Please provide two arguments."

**2. Checking for More Than 1 Argument:**

```bash
$argsCheck[>1;You need to provide at least two arguments!]
```

This ensures the user provides more than one argument (e.g., 2, 3, 4, etc.). If the user provides only one or no arguments, it sends "You need to provide at least two arguments!".

**3. Checking for Less Than 3 Arguments:**

```bash
$argsCheck[<3;Please provide fewer than three arguments.]
```

This checks if the user provides less than three arguments (e.g., 0, 1, or 2 arguments). If the user provides three or more arguments, it sends "Please provide fewer than three arguments."

**4. Checking for Exactly 1 Argument with No Error Message:**

```bash
$argsCheck[1;]
```

This checks if the user provides exactly one argument. If not, the script will halt, but no error message will be sent to the user.