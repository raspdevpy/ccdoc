# $removeContains: Delete Messages Containing Specific Words

This function allows you to delete messages within a specified channel that contain certain words. It's useful for moderation and removing unwanted content.

## Syntax

```bash
$removeContains[channelID;limit;word1;word2;...]
```

## Parameters

*   **`channelID`**:  The ID of the channel where messages should be deleted. You can retrieve a channel's ID by enabling Developer Mode in Discord settings (Appearance -> Advanced) and right-clicking the channel.
*   **`limit`**: The maximum number of messages to search through in the channel.  A higher limit will search through more messages, but may take longer.
*   **`word1;word2;...`**: A semicolon-separated list of words to look for within the messages.  Any message containing *any* of these words will be deleted.  Case sensitivity may vary depending on the bot implementation, so test accordingly.

## Example

Let's say you want to delete messages in channel `123456789012345678` containing either the word "spam" or the word "advertisement", and you want to check the last 100 messages.  You would use:

```bash
$removeContains[123456789012345678;100;spam;advertisement]
```

This command will search the last 100 messages in channel `123456789012345678` and delete any message containing either "spam" or "advertisement".

## Important Considerations

*   **Permissions:** The bot must have the `Manage Messages` permission in the specified channel to delete messages.
*   **Rate Limits:** Be mindful of Discord's rate limits when deleting messages.  Deleting messages rapidly can cause the bot to be temporarily rate limited. Consider adding a small delay between deletions if you anticipate a large number of messages being removed.
*   **Case Sensitivity:**  The case sensitivity of the word matching may depend on the specific implementation of the bot. Test thoroughly to ensure the function behaves as expected.
*   **Message Age:** Discord only allows bots to delete messages that are less than 14 days old. Messages older than this cannot be removed using this function.