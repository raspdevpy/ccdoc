# $memberJoinedDate
Returns the date a member joined in date or time from the provided user/command executor. 
#### Usage: `$memberJoinedDate[userid;date/time(optional)]` or `$memberJoinedDate`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $memberJoinedDate[725721249652670555;date]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Sat Oct 31 2020 10:55:30 GMT+0000 (Coordinated Universal Time)
	</discord-message>
</discord-messages>

::: tip Other Timezone
Date functions uses on default UTC timezone,but you can change it [Learn More](./timezone.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="memberJoinedDate" vertical="middle" /> 
