# $botPing

This function retrieves and returns the bot's current message ping (latency). This is a measure of the time it takes for the bot to send and receive a message.

## How it Works

The `$botPing` function calculates the time difference between when the bot sends a message to the Discord API and when it receives a response. This time is typically measured in milliseconds (ms).

## Usage

Simply use the `$botPing` function in your command or event.

```
$botPing
```

## Example

If the bot's ping is 50ms, the function will return:

`50ms`

## Common Use Cases

*   **Monitoring Bot Performance:** Use this function to track the bot's responsiveness and identify potential performance issues.
*   **Creating a Ping Command:** Implement a command that allows users to quickly check the bot's current ping.
*   **Debugging:**  A high ping can indicate network problems or server issues.