# $vcBefore

The `$vcBefore` function returns the ID of the voice channel a user was previously in *before* a voice channel event occurred. This is particularly useful for voice channel join and leave triggers.

**In simpler terms:** Imagine someone moves from Voice Channel A to Voice Channel B. `$vcBefore` would return the ID of Voice Channel A.  If they disconnect entirely from a voice channel, `$vcBefore` would return the ID of the voice channel they left.

## Functionality

This function retrieves the voice channel ID associated with a "before" state in voice channel activities, such as:

*   **Voice channel switching:** When a user moves from one voice channel to another.
*   **Leaving a voice channel:** When a user disconnects from a voice channel.

## Usage

```bash
$vcBefore
```

This function doesn't require any arguments. When used within the context of a voice channel join or leave event, it will automatically retrieve the appropriate voice channel ID.

**Example Scenario:**

Let's say you have a bot that announces when a user leaves a voice channel. You could use `$vcBefore` to get the ID of the channel they left and then retrieve the channel name to display in the announcement.

**Important Notes:**

*   This function only works within the context of events triggered by voice channel changes (join, leave, switch). Using it outside of these events will likely result in an empty.
*   The returned value is the voice channel's ID, a numerical representation of the channel. You might need to use other functions to convert this ID into a human-readable name or other information.