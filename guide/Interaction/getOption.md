# $getOption

Retrieves the value of a user-provided option from an interaction, such as a slash command.  This function allows you to access the specific input a user has provided for a command option.

## Usage

```bash
$getOption[Option name]
```

**Explanation:**

*   **`$getOption`**:  The function call.
*   **`[Option name]`**:  The *name* of the option you want to retrieve the user's input for. This name is case-sensitive and must match the option name defined in your slash command.

## Example

Let's say you have a slash command with an option named "message".  The following image shows an example of how a user might input a value for this option.

![Example Slash Command Input](https://i.imgur.com/WmibgUO.png)

In this case, the user has entered "Hello, world!" as the value for the "message" option.  To retrieve this value, you would use `$getOption[message]`.

## Output

If you use `$getOption[message]` in the scenario above, the output would be:

![Example Output](https://i.imgur.com/DOzUgk9.png)

**Important Considerations:**

*   **Case Sensitivity:** The `Option name` is case-sensitive.  Make sure it exactly matches the name you defined for the option in your slash command setup.
*   **Interaction Type:** This function is primarily designed for use within interaction-based commands, like slash commands.