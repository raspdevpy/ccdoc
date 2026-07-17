# $getChannelSlowmode

Retrieves the slow mode duration (in seconds) of a specified channel. If no slow mode is active, it returns `0`.

## Syntax

```
$getChannelSlowmode or $getChannelSlowmode[channelID]
```

## Parameters

*   **`channelID` (Optional):** The ID of the channel to check. If omitted, the function defaults to the current channel where the command is executed.

## Example Usage

*   **Check the slow mode of the current channel:**

    ```
    $getChannelSlowmode
    ```

    **Returns:**  `5` (if the current channel has a 5-second slow mode) or `0` (if no slow mode is active).

*   **Check the slow mode of a specific channel:**

    ```
    $getChannelSlowmode[123456789012345678]
    ```

    **Returns:** `10` (if channel with ID `123456789012345678` has a 10-second slow mode) or `0` (if no slow mode is active).

## Notes

*   The `channelID` must be a valid channel ID.
*   Ensure your bot has the necessary permissions to view the channel.