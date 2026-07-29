# $disableRoleMentions

This function prevents the bot from mentioning any roles in its messages. This is useful for avoiding unnecessary notifications to server members.

## How it Works

`$disableRoleMentions` will remove the ability of the bot to ping any role in the server when sending a message.

## Usage

Simply include `$disableRoleMentions` in your command response or any message where you want to disable role mentions.

```
$disableRoleMentions
```

**Example:**

Let's say you have a command that sends a welcome message, but you don't want to mention any roles in that message:

```
$disableRoleMentions
Hello and Welcome!
```

In this example, even if the message contained a role ID (e.g., `<@&123456789012345678>`), it would be displayed as plain text instead of pinging the role.