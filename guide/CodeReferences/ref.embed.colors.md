# Acceptable Embed Colors
### Name List:
| Name | Equivalent Hex |
|:-----------:|:-------------:|
| Default | #000000 |
| White | #ffffff |
| Aqua | #1abc9c |
| Green | #57f287 |
| Blue | #3498db |
| Yellow | #fee75c |
| Purple | #9b59b6 |
| LuminousVividPink | #e91e63 |
| Fuchsia | #eb459e |
| Gold | #f1c40f |
| Orange | #e67e22 |
| Red | #ed4245 |
| Grey | #95a5a6 |
| Navy | #34495e |
| DarkAqua | #11806a |
| DarkGreen | #1f8b4c |
| DarkBlue | #206694 |
| DarkPurple | #71368a |
| DarkVividPink | #ad1457 |
| DarkGold | #c27c0e |
| DarkOrange | #a84300 |
| DarkRed | #992d22 |
| DarkGrey | #979c9f |
| DarkerGrey | #7f8c8d |
| LightGrey | #bcc0c0 |
| DarkNavy | #2c3e50 |
| Blurple | #5865f2 |
| Greyple | #99aab5 |
| DarkButNotBlack | #2c2f33 |
| NotQuiteBlack | #23272a |
| Transparent | #2b2d31 |
| Trans | #2b2d31 |
| Random | A random color from #000000 to #ffffff |

### Hex
It can also accept hex colors like `#1abc9c`

### Example 1
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $sendMessage[<br>{desc:You are awesome}<br>{color:Aqua}<br>]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			borderColor="#1abc9c"
		>
		You are awesome
		</discord-embed>
	</discord-message>
</discord-messages>

### Example 2
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $description[You are awesome}]<br>$color[#0099ff]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		<discord-embed
			slot="embeds"
			borderColor="#0099ff"
		>
		You are awesome
		</discord-embed>
	</discord-message>
</discord-messages>
