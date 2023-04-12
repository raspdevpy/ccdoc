# $get
retrieve variable defined by [$let](./let.md)

## Usage: `$get[varname;value if not exists] or $varname`

### Example 1:
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $let[orange;10] <br/> $get[orange] or $orange
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		10 or 10
	</discord-message>
</discord-messages>

### Example 2 (Use default value if not exists):
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Your name is $get[name;Mido]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Your name is Mido
	</discord-message>
</discord-messages>

::: tip Related Functions
Check out: [$let](../Variables/let.md)
:::
