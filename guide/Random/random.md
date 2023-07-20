# $random
Returns a random number from X to Y

#### Usage: 
`$random[min;max;allowDecimals (yes/no)(optional, default=no)]`

## Notes:
max is inclusive if allowDecimals is `no`

max is exclusive if allowDecimals is `yes`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec `$random[1;6]`
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		4
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="random" vertical="middle" /> <Badge type="tip" text="random number" vertical="middle" /> <Badge type="tip" text="choose" vertical="middle" /> <Badge type="tip" text="return a random number" vertical="middle" />