# $day
returns current date or if $day[yes] the day
#### Usage: `$day[Return day of the week (yes/no)(optional)]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $day $day[yes]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		25 Saturday
	</discord-message>
</discord-messages>

::: tip Other Timezone
Date functions uses on default UTC timezone,but you can change it [Learn More](./timezone.md)
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="day" vertical="middle" /> 