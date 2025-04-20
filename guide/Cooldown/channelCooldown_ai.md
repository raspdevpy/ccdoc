# $channelCooldown

Sets a cooldown for a command, *per channel*! This means the command can only be used again in the specific channel after the specified cooldown has expired.

#### Usage:

`$channelCooldown[time (default is 5s);Error message]`

*   **time:** The cooldown duration.  Defaults to 5 seconds if not provided.  Examples: `10s`, `1m`, `2h`, `1d`.
*   **Error message:** The message to send when a user tries to use the command before the cooldown expires.

### Example:

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $channelCooldown[2h;You can get points again after %time%]<br>
    $sendMessage[You received 100x points.]
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    You can get points again after 1 hour 54 minutes and 56 seconds
  </discord-message>
</discord-messages>

In this example, the command will give the user 100 points.  If they try to use the command again within 2 hours in the same channel, they will receive the error message: "You can get points again after [remaining time]".

## Usable Macros in Error Message:

These macros can be used in your error message to provide dynamic information about the cooldown.

| Macro        | Description                                       | Output Example                           |
| ------------ | ------------------------------------------------- | ---------------------------------------- |
| `%time%`     | Replaced with the remaining time in a readable format. | `5 days 1 hour 54 minutes and 56 seconds` |
| `%days%`     | The number of days remaining.                   | `5`                                      |
| `%hrs%`      | The number of hours remaining.                  | `1`                                      |
| `%mins%`     | The number of minutes remaining.                | `54`                                     |
| `%secs%`     | The number of seconds remaining.                | `56`                                     |
| `%timestamp%` | Unix timestamp (seconds) for when the cooldown expires. | `1680711176`                             |
| `%relative%` | Displays the remaining time using Discord's relative timestamp feature (updates automatically).  | ![](https://i.imgur.com/F2bAFnk.png)         |

::: tip Note
You can send styled messages or embeds by using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md) in the error message.
:::

::: tip Related Functions
*   [$cooldown](../Cooldown/cooldown.md): Sets a cooldown for a command, *per user*.
*   [$serverCooldown](../Cooldown/serverCooldown.md): Sets a cooldown for a command, *per server*.
:::

::: danger Important
Place the `$channelCooldown` function on the **FIRST line** of your command's code.  If it's not the first line, the code before it will execute regardless of the cooldown, and the cooldown won't apply correctly.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Cooldown" vertical="middle" /> <Badge type="tip" text="Channel Cooldown" vertical="middle" /> <Badge type="tip" text="Raid Limit" vertical="middle" /> <Badge type="tip" text="Raid Limited" vertical="middle" />