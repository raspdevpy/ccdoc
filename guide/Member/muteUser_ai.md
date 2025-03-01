# $muteUser

Mutes or unmutes a user in a voice channel. This command allows you to temporarily prevent a user from speaking in voice channels.

## Usage

```bash
$muteUser[userID (default = $authorID);mute (yes/no);reason (optional)]
```

**Parameters:**

*   `userID`: The ID of the user you want to mute or unmute. Defaults to the author of the command if not specified (using `$authorID`).
*   `mute`:  Specify whether to mute or unmute the user. Use `yes` to mute and `no` to unmute.
*   `reason`: (Optional) The reason for the mute. This will typically be displayed in audit logs (if your bot logs these).

## Example

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
        <DiscordMarkdown>
	        !!exec $muteUser[123456789012345678;yes;Breaking voice chat rules]
            {{ '\n' }}
          The selected user can no longer speak in voice channels.
		</DiscordMarkdown>
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		The selected user can no longer speak in voice channels.
	</discord-message>
</discord-messages>

::: tip Troubleshooting
If you encounter an error, ensure the bot has the necessary "Mute Members" permission.  Also, the bot's role must be higher in the role hierarchy than the user being muted.
:::

::: tip Related Functions
*   [Is Muted](../Text/isandhas/isMuted.md):  Check if a user is currently muted.
:::