# $channelCooldown

Sets a cooldown for a command in channel.

## Usage

```bash
$channelCooldown[time;error message]
```
1. **time** - (Optional) default value: `5s`. The cooldown duration. Example times: `10s`, `1m`, `2h`, `1d`
2. **error message** - (Optional) default value: (none). The message to send if a cooldown is still in progress.

## Example

#### Using $channelCooldown

As you can see, first time it will set the cooldown and execute code below, second time, it won't allow execution

<discord-messages>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $channelCooldown[5m;You're on cooldown!]<br>
        You're not on cooldown!
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        You're not on cooldown!
    </discord-message>
    <discord-message :bot="false" role-color="#d6e0ff" author="User" avatar="https://cdn.discordapp.com/embed/avatars/0.png">
        !!exec $channelCooldown[5m;You're on cooldown! Still %mins%m remaining!]<br>
        You're not on cooldown!
    </discord-message>
    <discord-message :bot="true" role-color="#5fb0fa" author="Custom Command" avatar="https://doc.ccommandbot.com/bot-profile.png">
        You're on cooldown! Still 4m remaining!
    </discord-message>
</discord-messages>

## Placeholders

Available placeholders you can use in error message

| Placeholder   | Description                                               | Output Example                            |
| ------------- | --------------------------------------------------------- | ----------------------------------------- |
| `%time%`      | The full time remaining                                   | `1 day 2 hours 3 minutes and 4 seconds`   |
| `%days%`      | The number of days remaining                              | `1`                                       |
| `%hrs%`       | The number of hours remaining                             | `2`                                       |
| `%mins%`      | The number of minutes remaining                           | `3`                                       |
| `%secs%`      | The number of seconds remaining                           | `4`                                       |
| `%timestamp%` | Timestamp of cooldown expiration in seconds               | `1735689600`                              |
| `%relative%`  | Shows Discord relative timestamp (Automatically Updates)  | `<t:1735689600:R>` - Displays: `in 1 day` |

::: warning Warning
Place this function above the code you want to use cooldown for. All code before this function will be executed.
:::
::: tip Suggestion
You can send embeds, select menus and buttons by using the [message curl format](../CodeReferences/ref.message_curl_format.md).
:::


##### Related functions: [$cooldown](../Cooldown/cooldown.md) [$serverCooldown](../Cooldown/serverCooldown.md)

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="Cooldown" vertical="middle" /> <Badge type="tip" text="Channel Cooldown" vertical="middle" /> <Badge type="tip" text="Limit" vertical="middle" />