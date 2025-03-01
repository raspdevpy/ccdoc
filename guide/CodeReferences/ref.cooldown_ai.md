# $cooldown Code Reference

This page explains how to use the `$cooldown` function in your command's code on the dashboard.  The `$cooldown` function prevents users from using a command too frequently.

*(Return to the main cooldown documentation [here](../Useful/cooldown.md))*

## Example Code

```bash
$cooldown[24h;❌ - You can not use this command again yet! Please wait %time% before executing this command again]

$sendMessage[Good morning, I have given you your daily salary!]

$initVar[user;money;0]

$setUserVar[money;$math[$getUserVar[money]+1]]
```

## Explanation

This example demonstrates a command that gives a user daily salary, but only once every 24 hours.  Let's break down the `$cooldown` function and the surrounding code:

*   **`$cooldown[24h;❌ - You can not use this command again yet! Please wait %time% before executing this command again]`**: This is the cooldown function.
    *   **`24h`**:  This sets the cooldown duration to 24 hours.  The user will have to wait this long before they can use the command again.
    *   **`❌ - You can not use this command again yet! Please wait %time% before executing this command again`**: This is the error message that the user receives if they try to use the command before the cooldown expires.  `%time%` is a placeholder that will be automatically replaced with the remaining time on the cooldown.

*   **`$sendMessage[Good morning, I have given you your daily salary!]`**:  This sends a message to the user confirming they received their daily salary.

*   **`$initVar[user;money;0]`**:  This initializes a user variable called "money" to 0 if it doesn't already exist.

*   **`$setUserVar[money;$math[$getUserVar[money]+1]]`**:  This adds 1 to the user's "money" variable. `$getUserVar[money]` retrieves the current value of the "money" variable, `$math[...]` performs the addition, and `$setUserVar[money;...]` updates the "money" variable with the new value.

## Key Function Details

*   The `$cooldown` function *must* be placed at the *beginning* of your code. If not the cooldown may not work correctly.
*   The error message in the `$cooldown` function can be customized to provide clear instructions to the user.
*   The `time` variable is built in and replaced with the amount of time left on the cooldown.

## Used Functions

The example code utilizes the following functions:

*   **`$sendMessage`**:  [Link to documentation](../Message/sendMessage.md)
*   **`$initVar`**:  [Link to documentation](../Variables/initVar.md)
*   **`$setUserVar`**:  [Link to documentation](../Variables/setUserVar.md)