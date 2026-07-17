# $deleteIn

Deletes the bot's message after a specified duration.

#### Usage: `$deleteIn[time]`

**Argument:**

*   `time` - The time to wait before deleting the message.  This can be expressed in seconds (`s`), minutes (`m`), hours (`h`), or days (`d`). For example, `10s`, `2m`, `1h`, `1d`.

#### Example:

`$deleteIn[10s]` - This will delete the bot's message 10 seconds after it's sent.

::: tip Related Functions
*   [$deleteMessage](../Message/deleteMessage.md): Deletes a specific message in the server or DMs.
*   [$deletecommand](../Message/deletecommand.md): Deletes the message that triggered the command.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Delete Message" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" /> <Badge type="tip" text="Delete After" vertical="middle" /> <Badge type="tip" text="Delete In Time" vertical="middle" />