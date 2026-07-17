# `$transcriptChannel`

This function generates an HTML file containing a transcript of the latest messages from a specified channel and can optionally send the generated file to another channel.

**Functionality:** Compiles the latest messages from a channel into an HTML file.

## Usage

```bash
$transcriptChannel[Channel ID;Send to Channel ID;Message (optional);file name (optional);return message id or undefined.if message could not be send(yes/no default=no)]
```

**Parameters:**

*   **`Channel ID`**: (Required) The ID of the channel from which to retrieve the messages.

*   **`Send to Channel ID`**: (Required) The ID of the channel where the generated HTML transcript file will be sent.

*   **`Message (optional)`**: (Optional) An optional message to send along with the transcript file. If left blank, no message will be sent.

*   **`file name (optional)`**: (Optional) The desired filename for the generated HTML transcript file (without the `.html` extension). If left blank, a default filename will be used.

*   **`return message id or undefined.if message could not be send(yes/no default=no)`**: (Optional) Determines whether the function should return the ID of the message containing the sent transcript file.  Defaults to `no`.  If set to `yes`, the function returns the message ID. If the message could not be sent, the function returns `undefined`. If set to `no`, nothing will be returned.

### Example

```
$transcriptChannel[123456789012345678;987654321098765432;Here is the channel transcript;my_transcript;yes]
```

This example will:

1.  Retrieve messages from channel `123456789012345678`.
2.  Send an HTML transcript file to channel `987654321098765432` with the message "Here is the channel transcript".
3.  Name the generated HTML file "my\_transcript.html".
4.  Return the ID of the message sent to channel `987654321098765432`.

### Notes

*   Ensure the bot has the necessary permissions (Read Messages, View Channel, Send Messages, Attach Files) in both the source channel (`Channel ID`) and the destination channel (`Send to Channel ID`).
*   The "latest messages" are determined by the bot's message history caching. The number of messages retrieved may vary depending on server settings and message activity.
*   The function returns `undefined` if the bot fails to send the message with the file (e.g., due to permission issues or file size limits).