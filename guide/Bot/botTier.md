# $botTier

This command retrieves the current tier level of your bot.

The standard, free version of the bot operates at **Tier 0**.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $botTier
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		0
	</discord-message>
</discord-messages>

The command will then return the tier level of your bot.