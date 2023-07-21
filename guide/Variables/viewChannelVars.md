# $viewChannelVars

View a list of all the variables that are defined for a specific channel, and search for specific variables using a regular expression query filter

## Usage

```bash
$viewChannelVars[Channel ID (default: $channelID);Separator;Query Regex (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $viewChannelVars<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        ticket, ticket_owner, staff<br><br>
        </discord-message>
</discord-messages>

### Example (return only variables that starts with ticket):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $viewChannelVars[$channelID; ,;^ticket]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        ticket, ticket_owner
        </discord-message>
</discord-messages>