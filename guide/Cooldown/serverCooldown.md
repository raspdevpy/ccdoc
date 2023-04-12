# $serverCooldown
Sets a cooldown for a command, across all members in your server, when user face a cooldown, it stops the execution and send `Error Message`
## Usage: 
`$serverCooldown[time (default is 5s);Error message]`

### Example 1:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $serverCooldown[2h;You can get points again after %time%]<br>
        $sendMessage[You received 100x points.]<br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        You can get points again after 1 hour 54 minutes and 56 seconds<br><br>
        </discord-message>
</discord-messages>

## Usable Macros In Message :
| Macro      | Description | Output Example |
| ----------- | ----------- | ----------- |
| %time% | replaced with human readable time |5 days 1 hour 54 minutes and 56 seconds |
| %days% | days left | 5 |
| %hrs%  | hours left | 1 |
| %mins% | minutes left |54 |
| %secs% | seconds left | 56 |
| %timestamp% | timestamp in seconds for when cooldown expire | 1680711176 |
| %relative% | uses discord to update itself |![](https://i.imgur.com/F2bAFnk.png) |

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

::: tip Related Functions
[$channelCooldown](../Cooldown/channelCooldown.md), for a channel based cooldown

[$cooldown](../Cooldown/cooldown.md), for a user based cooldown
:::

::: danger
Use this code, on the FIRST line of your code! If you do not, it will execute all code before this line and not after!
:::


##### Function difficulty <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Cooldown" vertical="middle" />  <Badge type="tip" text="Server Cooldown" vertical="middle" />  <Badge type="tip" text="Raid Limit" vertical="middle" />  <Badge type="tip" text="Raid Limited" vertical="middle" /> 