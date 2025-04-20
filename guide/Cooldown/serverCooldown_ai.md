# $serverCooldown

This function sets a cooldown for a command, applying to *all* members within the server. While a user is on cooldown, the command execution will be halted, and an error message will be displayed to them. This is useful for preventing command spam and abuse.

## Usage:

`$serverCooldown[time (default is 5s);Error message]`

*   **time:** The duration of the cooldown. You can specify the time in seconds (s), minutes (m), hours (h), or days (d). If no time is provided, the default cooldown is 5 seconds.
*   **Error message:** The message displayed to the user when they attempt to use the command while on cooldown.

### Example:

This example demonstrates how to give users points, with a cooldown of 2 hours.

```html
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $serverCooldown[2h;You can get points again after %time%]<br>
        $sendMessage[You received 100x points.]<br>
    </discord-message>
    <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You can get points again after 1 hour 54 minutes and 56 seconds<br><br>
    </discord-message>
</discord-messages>
```

In this example:

*   `$serverCooldown[2h;You can get points again after %time%]` sets a 2-hour server-wide cooldown. If a user tries to run the command within those 2 hours, they will receive the specified error message.
*   `$sendMessage[You received 100x points.]` will send a message to the user if they are not on cooldown.

## Available Macros in Error Message:

You can use the following macros within your error message to dynamically display cooldown information:

| Macro        | Description                               | Output Example                       |
| ------------ | ----------------------------------------- | ------------------------------------ |
| `%time%`     | Replaced with human-readable time left.  | `5 days 1 hour 54 minutes and 56 seconds` |
| `%days%`     | Number of days left on the cooldown.    | `5`                                  |
| `%hrs%`      | Number of hours left on the cooldown.   | `1`                                  |
| `%mins%`     | Number of minutes left on the cooldown. | `54`                                 |
| `%secs%`     | Number of seconds left on the cooldown. | `56`                                 |
| `%timestamp%` | Unix timestamp (seconds) of expiration. | `1680711176`                         |
| `%relative%`  | Discord's relative timestamp.          | ![](https://i.imgur.com/F2bAFnk.png) |

::: tip Note
You can format the error message as an embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md).
:::

::: tip Related Functions
*   [$channelCooldown](../Cooldown/channelCooldown.md): Sets a cooldown for a command on a per-channel basis.
*   [$cooldown](../Cooldown/cooldown.md): Sets a cooldown for a command on a per-user basis.
:::

::: danger Important
This function **must** be placed on the **first line** of your command code. Otherwise, the code before it will execute regardless of the cooldown, defeating the purpose of the function.
:::

##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Cooldown" vertical="middle" />  <Badge type="tip" text="Server Cooldown" vertical="middle" />  <Badge type="tip" text="Raid Limit" vertical="middle" />  <Badge type="tip" text="Raid Limited" vertical="middle" />