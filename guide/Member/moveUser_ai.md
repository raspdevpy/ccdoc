# $moveUser

Moves a user to a different voice channel, or disconnects them from their current voice channel.

## Description

The `$moveUser` function allows you to move a specified user to a different voice channel. If you don't provide a target channel, the function will disconnect the user from their current voice channel.  This is a powerful tool for moderation and managing voice channel activity.

## Usage

```bash
$moveUser[userID;channelID (optional);reason (optional)]
```

## Parameters

*   **`userID`**: (Required) The ID of the user you want to move or disconnect.  This must be a valid user ID within your Discord server.
*   **`channelID`**: (Optional) The ID of the voice channel you want to move the user to. If omitted, the user will be disconnected from their current voice channel.
*   **`reason`**: (Optional) A reason for the move or disconnection. This reason will be visible in the server's audit log.

## Examples

**Moving a user to a specific channel:**

```bash
$moveUser[123456789012345678;987654321098765432;User was being disruptive]
```

This example will move the user with ID `123456789012345678` to the voice channel with ID `987654321098765432`. The reason provided is "User was being disruptive".

**Disconnecting a user from their current channel:**

```bash
$moveUser[123456789012345678;;User was AFK]
```

This example will disconnect the user with ID `123456789012345678` from their current voice channel. The reason provided is "User was AFK".  Notice the double semi-colon `;;` which represents an empty `channelID` value, indicating a disconnect.