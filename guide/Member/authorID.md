# $authorID
Returns the ID of the User that triggered the command.

#### Usage: `$authorID`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="User">
		!!exec $authorID
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		683630053686378498
	</discord-message>
</discord-messages>

::: tip Related Functions
[$mention](../Member/mention.md) ― to mention the author of a command!
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="authorID" vertical="middle" /> <Badge type="tip" text="cmd executor" vertical="middle" /> <Badge type="tip" text="command author" vertical="middle" /> <Badge type="tip" text="command" vertical="middle" /> <Badge type="tip" text="userID" vertical="middle" />