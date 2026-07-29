# Understanding Message Types

The `$messageType` function is your key to identifying the kind of message you're dealing with.  It returns a specific type, allowing you to tailor your bot's behavior accordingly. Think of it as a way to understand the *context* of a message beyond just the text.

**Why is this useful?**

Knowing the message type lets you:

*   React differently to system messages versus user-generated content.
*   Filter specific events, like new member joins or channel updates.
*   Customize responses based on the context of a command execution (e.g., a slash command versus a regular message).

### Available Message Types

Here's a breakdown of the message types you might encounter, along with brief explanations:

*   `Default`: A standard text message sent by a user or bot.
*   `Recipient Add`: A user was added to a group DM.
*   `Recipient Remove`: A user was removed from a group DM.
*   `Call`:  A call has started or ended (typically voice/video).
*   `Channel Name Change`: The name of a channel was changed.
*   `Channel Icon Change`: The icon of a channel was changed.
*   `Channel Pinned Message`: A message was pinned in the channel.
*   `User Join`: A new user joined the server/guild.
*   `Guild Boost`: The server/guild received a boost.
*   `Guild Boost Tier 1`: The server/guild reached boost level 1.
*   `Guild Boost Tier 2`: The server/guild reached boost level 2.
*   `Guild Boost Tier 3`: The server/guild reached boost level 3.
*   `Channel Follow Add`:  A channel was followed (typically in announcement channels).
*   `Guild Discovery Disqualified`: The server/guild was disqualified from server discovery.
*   `Guild Discovery Requalified`: The server/guild requalified for server discovery.
*   `Guild Discovery Grace Period Initial Warning`: A warning about an upcoming disqualification from server discovery.
*   `Guild Discovery Grace Period Final Warning`: A final warning before disqualification from server discovery.
*   `Thread Created`: A new thread was created in a channel.
*   `Reply`: A message that's a reply to another message.
*   `Chat Input Command`: A slash command was used (starting with `/`).
*   `Thread Starter Message`: The first message in a thread.
*   `Guild Invite Reminder`: A reminder about an outstanding guild invite.
*   `Context Menu Command`: A command executed from the context menu (right-click).
*   `Auto Moderation Action`: An action taken by auto-moderation.
*   `Role Subscription Purchase`: A user purchased a role subscription.
*   `Interaction Premium Upsell`: A premium upsell related to an interaction.
*   `Stage Start`: A stage channel has started.
*   `Stage End`: A stage channel has ended.
*   `Stage Speaker`: A new speaker was added to a stage channel.
*   `Stage Topic`: The topic of a stage channel was changed.
*   `Guild Application Premium Subscription`: A premium subscription related to guild applications.
*   `Guild Incident Alert Mode Enabled`: Incident alert mode was enabled.
*   `Guild Incident Alert Mode Disabled`: Incident alert mode was disabled.
*   `Guild Incident Report Raid`: An incident report flagged a raid.
*   `Guild Incident Report False Alarm`: An incident report flagged a false alarm.
*   `Purchase Notification`:  A notification related to a purchase.
