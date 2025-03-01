# $mention

This function returns a mention of the user who triggered the command. This means it will display their name with the appropriate Discord formatting to notify them.

#### Usage:

Here's an example of how to use the `$mention` function:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="User">
		!!exec $mention
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordMention :highlight="true">User</DiscordMention>
	</discord-message>
</discord-messages>

In this example, the command `!!exec $mention` will output a direct mention of the user "User".

::: tip Related Functions
*   [$authorID](../Member/authorID.md):  Returns the unique ID of the user who executed the command.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="member" vertical="middle" /> <Badge type="tip" text="ping" vertical="middle" /> <Badge type="tip" text="mention" vertical="middle" /> <Badge type="tip" text="author" vertical="middle" />