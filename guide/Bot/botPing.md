# $botPing

This function retrieves and returns the bot's current message ping (latency). This is a measure of the time it takes for the bot to send and receive a message.

## How it Works

The `$botPing` function calculates the time difference between when the bot sends a message to the Discord API and when it receives a response. This time is typically measured in milliseconds (ms).

## Usage

Simply use the `$botPing` function in your command or event.

```php
$botPing
```

## Example

If the bot's ping is 50ms, the function will return:

`50ms`
