# $muteUser

Mutes or unmutes user in a voice channel.

## Usage

```bash
$muteUser[userID (default = $authorID);mute (yes/no);reason (optional)]
```
## Example

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $muteUser[123456789012345678;yes;Breaking voice chat rules]
            {{ '\n' }}
          Selected user can no longer speak in voice channels.
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Selected user can no longer speak in voice channels.
	</discord-message>
</discord-messages>

::: tip Recieved error message?
Check if the bot has mute permission, and his position is higher in the hierarchy than muted user's
:::

::: tip Related function
[$kick](../Text/isandhas/isMuted.html)
:::
 
