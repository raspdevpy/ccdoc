# Curl Arguments

Tired of long, complicated function calls with tons of empty parameters? Curl arguments are here to help! They provide a more readable and intuitive way to pass options to functions, making your code cleaner and easier to understand.

Instead of using parameter arrays like `$randomText[one;two;three]`, curl arguments allow you to specify options using a key-value format, similar to how you would in a URL. This eliminates the need for placeholder values and improves the overall clarity of your code.

**Key Benefits:**

*   **Improved Readability:**  No more deciphering long strings of semicolons and empty parameters. Curl arguments make it clear what each option is intended for.
*   **Simplified Code:** Avoid unnecessary placeholder values for optional parameters.  You only need to specify the options you want to change.
*   **Reduced Errors:** Easier to see and avoid mistakes when specifying function parameters.

## Example: Creating a Channel with Curl Arguments

Let's say you want to create a text channel. Using traditional parameters, you might need to include several empty values for optional settings.  With curl arguments, it's much simpler:

```bash
$createChannel[
    {name=channelName}
    {type=text}
    {topic=channel topic}
]
```

This code clearly defines the channel's name, type, and topic without requiring you to specify values for "return ID" or "NSFW" (or leave them blank with `;;;`).

## Checking for Curl Support

Not all functions support curl arguments yet. To find out if a specific function supports them, use the `!!func` command:

```
!!func function name
```

This will provide information about the function, including whether curl arguments are supported.  Look for a "Curl Support" or similar indicator in the function documentation.  If it's supported, you can start taking advantage of this cleaner, more efficient way to pass options!