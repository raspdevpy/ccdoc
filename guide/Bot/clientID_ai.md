# $clientID

Retrieves the bot's User ID, also referred to as the Client ID. This is a unique identifier for your bot on Discord.

#### Usage: `$clientID`

<br/>

This function is commonly used to programmatically access the bot's ID within custom commands or other bot logic.

Here's an example of how it works in practice:

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $clientID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		725721249652670555
	</discord-message>
</discord-messages>

As you can see, the command `!!exec $clientID` returns the bot's ID: `725721249652670555`.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="bots" vertical="middle" /> <Badge type="tip" text="ID" vertical="middle" /> <Badge type="tip" text="user ID" vertical="middle" /> <Badge type="tip" text="Custom Command" vertical="middle" />