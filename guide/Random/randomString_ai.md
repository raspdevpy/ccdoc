# $randomString

Generates a random string of a specified length. This function is useful for creating unique identifiers, temporary passwords, or simply adding randomness to your commands.

#### Usage:

`$randomString[length]`

*   `length`: (Required) The desired length of the random string. This should be a positive integer.

<br/>

#### Example:

This example demonstrates how to use `$randomString` to generate a 6-character random string.

<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$randomString[6]`
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		qe90bT
	</discord-message>
</discord-messages>

In this example, the command `!!exec $randomString[6]` will generate a random string of 6 characters, such as `qe90bT`.  The output will vary each time the command is executed.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random text" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="return random string" vertical="middle" />