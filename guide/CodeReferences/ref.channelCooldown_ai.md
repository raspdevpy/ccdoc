# Channel Cooldown Code Reference

This page explains the code used in the channel cooldown setting within your command dashboard. It's used to prevent users from using the command too frequently within a specific channel.

*(Return to the main Channel Cooldown page: [Channel Cooldown](../Useful/channelCooldown.md))*

---

**Example Code:**

```bash
$serverCooldown[2h;❌ - You can't submit another appeal within 2 hours! Try again in %time%]

$channelSendMessage[839090554205241394;$userTag submitted an appeal in <#$channelID>;no]
```

**Explanation:**

*   `$serverCooldown[2h;❌ - You can't submit another appeal within 2 hours! Try again in %time%]` - This function enforces a 2-hour cooldown.  If a user tries to use the command within that time, they will receive the message "❌ - You can't submit another appeal within 2 hours! Try again in %time%".  `%time%` will be replaced with the remaining time until they can use the command again.

*   `$channelSendMessage[839090554205241394;$userTag submitted an appeal in <#$channelID>;no]` - This function sends a message to the specified channel (839090554205241394 in this example). The message will indicate that the user (`$userTag`) has submitted an appeal in the channel where the command was used (`<#$channelID>`).  The `no` at the end likely controls whether a webhook is used.

---

**Functions Used:**

*   `$userTag`:  Mentions the user who triggered the command. [Learn more](../Member/userTag.md)
*   `$channelSendMessage`: Sends a message to a specific channel. [Learn more](../Message/channelSendMessage.md)
*   `$channelID`: Returns the ID of the channel where the command was executed. [Learn more](../Channel/channelID.md)
*   `$serverCooldown`: Applies a cooldown to a command based on the user's server. This means the cooldown applies across the entire server, not just a single channel.

This example sets a server-wide cooldown and then notifies a specific channel about the command execution. You can modify the channel ID and the cooldown message to fit your server's needs. Remember to replace `839090554205241394` with your desired channel ID.