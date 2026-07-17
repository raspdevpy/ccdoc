# $eventChannelParent

Returns the ID of the category/forum channel under which a channel or thread was created or deleted. This is **only applicable and useful within channel triggers** (e.g., `channelCreate` or `channelDelete`).

**In simpler terms:** Imagine a Discord server with categories and channels. This code helps you find out *which category* a new channel was created in, or *which category* a channel was deleted from.

## How to Use

Just use `$eventChannelParent` within the code of a channel-based trigger. It will be replaced with the category/forum's ID.

```bash
$eventChannelParent
```

**Example Scenario:**

Let's say you have a channel trigger that runs when a new channel is created. You can use `$eventChannelParent` to send a message to a specific log channel informing administrators which category the new channel was created under:

```bash
$channelSendMessage[LogChannelID;A new channel ($eventChannelName) was created under category ID: $eventChannelParent]
```

**Important Note:**  This function will only return a valid ID within the scope of channel triggers. Using it outside of those triggers may result in unexpected behavior (likely an empty string).