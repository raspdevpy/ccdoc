# $month
returns current month number or name
#### Usage: `$month[return name (yes/no)]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $month, $month[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		11, November
	</discord-message>
</discord-messages>

::: tip Other Timezone
Date functions uses on default UTC timezone,but you can change it [Learn More](./timezone.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="month" vertical="middle" /> 