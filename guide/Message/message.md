# $message

The `$message` function retrieves the user's message or command arguments, providing a powerful way to interact with user input.  It's particularly useful for commands where you need to process the text a user has entered.

**Key Use Cases:**

*   **Direct Message Content:**  Get the entire message a user sends after a command prefix (e.g., after `!cmd`).
*   **Command Arguments:** Access individual words or phrases provided as arguments to a command.
*   **Slash Command Data:** When used within a slash command, `$message` retrieves either the value of a specific option or all the option values entered by the user.

## Usage

```
$message
$message[index]
$message[startIndex+]
```

*   **`$message`**:  Returns the entire message following the command prefix.
*   **`$message[index]`**: Returns the argument at the specified *index* (starting from 1).
*   **`$message[startIndex+]`**: Returns all arguments starting from the specified *startIndex* (including the argument at that index).

## Examples

Let's say a user types the following command:

`!cmd Hello World, How are you?`

Here's how `$message` would behave:

*   `$message` would be replaced with: `Hello World, How are you?`
*   `$message[1]` would be replaced with: `Hello`
*   `$message[2]` would be replaced with: `World`
*   `$message[2+]` would be replaced with: `World, How are you?`

**Explanation:**

*   `$message` captures the entire input string after the `!cmd` command.
*   `$message[1]` gets the first word ("Hello"). Remember that indexing starts at 1, not 0.
*   `$message[2]` gets the second word ("World").
*   `$message[2+]` gets all the words starting from the second word ("World"), effectively creating a substring: "World, How are you?".

**Slash Command Example:**

Imagine you have a slash command `/greet user:John Doe message:Hello!`.

*   If your code does something like `$message[1]`, and the slash command the order `user` then `message`, it might try to access `"John Doe"`. It is more reliable to use `$getOption` for slash commands

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="message" vertical="middle" /> <Badge type="tip" text="arguments" vertical="middle" /> <Badge type="tip" text="argument handling" vertical="middle" />