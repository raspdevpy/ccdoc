# $cooldown

Sets a per-user cooldown for a command. This prevents users from spamming a command within a specified timeframe.

#### Usage:

`$cooldown[time (default 5s);Error message;user id (optional)]`

*   **time:** The duration of the cooldown.  Defaults to 5 seconds if not provided.  Examples: `10s`, `1m`, `2h`, `1d`.
*   **Error message:** The message displayed to the user if they try to use the command before the cooldown expires. You can use macros in this message (see below).
*   **user id (optional):**  Apply the cooldown to a specific user ID instead of the user executing the command. Useful for moderator commands.

### Example:

This example sets a 2-hour cooldown on a command that gives the user points.  If the user tries to use the command before the cooldown expires, they will receive a message indicating how much time is left.

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $cooldown[2h;You can get points again after %time%]<br>
        $sendMessage[You received 100x points.]<br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You can get points again after 1 hour 54 minutes and 56 seconds<br><br>
        </discord-message>
</discord-messages>

## Usable Macros In Message:

These macros can be used in the `Error message` to provide dynamic information about the remaining cooldown time.

| Macro          | Description                                  | Output Example                        |
| -------------- | -------------------------------------------- | ------------------------------------- |
| `%time%`        | Human-readable time remaining.              | 5 days 1 hour 54 minutes and 56 seconds |
| `%days%`        | Days remaining.                              | 5                                     |
| `%hrs%`         | Hours remaining.                             | 1                                     |
| `%mins%`        | Minutes remaining.                           | 54                                    |
| `%secs%`        | Seconds remaining.                           | 56                                    |
| `%timestamp%`   | UNIX timestamp (in seconds) of cooldown expiration. | 1680711176                            |
| `%relative%`    | Discord's relative timestamp (auto-updates). | ![](https://i.imgur.com/F2bAFnk.png) |

::: tip Note
You can send an embed as the error message using [Message Curl Format](../CodeReferences/ref.message_curl_format.md).
:::

::: tip Related Functions

*   [$channelCooldown](../Cooldown/channelCooldown.md):  For a channel-based cooldown.
*   [$serverCooldown](../Cooldown/serverCooldown.md): For a server-based cooldown.

:::

::: danger Important

Place this code on the **FIRST** line of your command's code.  If it's not the first line, the code *before* `$cooldown` will execute regardless of the cooldown.

:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Cooldown" vertical="middle" />  <Badge type="tip" text="Wait" vertical="middle" />  <Badge type="tip" text="Raid Limit" vertical="middle" />  <Badge type="tip" text="Raid Limited" vertical="middle" />