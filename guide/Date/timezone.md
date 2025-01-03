# $timezone
This function sets the timezone for all date functions after the `$timezone` function itself.\
Get valid timezone names from [this website](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
#### Usage: `$timezone[Region/City]`

Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec 
        UTC $hour
        after Change $timezone[Europe/Zurich]
        Europe/Zurich $hour
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		UTC 10
        after Change  Europe/Zurich 12
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="timezone" vertical="middle" /> 
