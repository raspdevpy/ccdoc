# $editIn

Edits a bot's message after a specified delay. This function allows you to update the message content after a set period of time, making it useful for creating dynamic or delayed responses.

## Usage

```bash
$editIn[time;new message]
```

**Parameters:**

*   `time`: The delay before the message is edited.  This should be expressed in seconds (`s`), minutes (`m`), hours (`h`), or days (`d`).  For example: `3s`, `1m`, `2h`, `1d`.
*   `new message`: The new content of the message after the specified time has elapsed. This can include other functions and variables.

## Example:

```bash
Rolling the dice...
$editIn[3s;You got $random[1;6]]
```

**Explanation:**

This example first sends the message "Rolling the dice...". After a delay of 3 seconds, the message will be edited to "You got " followed by a random number between 1 and 6.

#### Output:

![](https://i.imgur.com/MOQMVcZ.gif)