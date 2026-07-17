# $humanizeMS
Converts milliseconds into human readable durations

#### Usage: `$humanizeMS[MS;limit (Number) (optional), separator (optional)]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $humanizeMS[$timeStamp;4;,]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		52 years,5 months,26 days,and 10 hours
	</discord-message>
</discord-messages>

::: tip Other Timezones
Date functions by default use the UTC timezone,but you can change it [Learn More](./timezone.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="humanizeMS" vertical="middle" /> 
