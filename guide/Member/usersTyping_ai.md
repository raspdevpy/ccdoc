# $usersTyping

Retrieve a list of users currently typing in a channel. This function is useful for creating dynamic indicators showing who is actively engaging in a conversation.

## Usage

The `$usersTyping` function has two variations:

*   **Basic Usage (Current Channel):**  Retrieves the users typing in the *current* channel the command is executed in.
    ```bash
    $usersTyping
    ```

*   **Advanced Usage (Specific Channel with Formatting):** Allows you to specify a channel ID, a format for displaying the users, and a separator.

    ```bash
    $usersTyping[channelID;mention/tag/username (optional);separator (optional)]
    ```

## Parameters

*   **`channelID` (Required in Advanced Usage):** The ID of the channel you want to check for typing users.  If omitted in the basic usage, it defaults to the current channel.

*   **`mention/tag/username` (Optional):**  Determines how the users will be displayed.
    *   `mention` (or omitted): Returns a mention string for each user (e.g., `<@123456789012345678>`). This is the default behavior.
    *   `tag`:  Also returns a mention string (same as `mention`).  Consider them interchangeable.
    *   `username`: Returns the username of each user (e.g., `ExampleUser`).

*   **`separator` (Optional):**  The string used to separate the list of users. If omitted, the default separator is a comma (`,`).  Examples include:

    *   `" "` (space): Users will be separated by a space.
    *   `", "` (comma and space): Users will be separated by a comma and a space.
    *   `" | "` (pipe and spaces): Users will be separated by a pipe symbol surrounded by spaces.

## Examples

**1. Get a list of users typing in the current channel (mentions, comma separated):**

```bash
$usersTyping
```

**Output:**

```
<@123456789012345678>, <@987654321098765432>
```

**2. Get a list of usernames typing in channel `112233445566778899` (space separated):**

```bash
$usersTyping[112233445566778899;username; ]
```

**Output:**

```
ExampleUser AnotherUser
```

**3. Get a list of mentions typing in channel `112233445566778899` (pipe separated):**

```bash
$usersTyping[112233445566778899;mention; | ]
```

**Output:**

```
<@123456789012345678> | <@987654321098765432>
```

## Notes

*   This function returns an empty string if no users are currently typing in the specified channel.
*   The bot needs the "Read Messages/View Channels" permission in the specified channel to be able to see who's typing.
*   Rate limits may apply if this function is used excessively.