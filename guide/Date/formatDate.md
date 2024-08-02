# $formatDate
Formats the providen Date provided in Milliseconds/Stringed Date/ISO String to default/given format. Syntax of formats can be found [here](https://momentjs.com/docs/#/parsing/string-format/)
#### Usage: `$formatDate[date in ms / string / iso string / javascript convertable date;format]`
Example:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $formatDate[$dateStamp] 
             $formatDate[$dateStamp;LLLL] 
                $formatDate[$dateStamp;dddd at hour HH] 
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Friday, March 14 2020
        March 14 2020 1:00 PM
        Sunday at hour 10
	</discord-message>
</discord-messages>

#### Time Options

* datestamp - Example: 1615578797890890
* ms - Example: 315569267878790ms
* string date - Example: 1/17/2021, 9:09:19 PM
* String in ISO - Example: 2000-3-12T14:48:00.000Z

#### Format Options

* Blank \(default\) - Example: Sunday, 14 March 2021
* LT - Time - Example: 6:01 AM
* LTS - Time w/ seconds - Example: 1:58:3 AM
* L - Date - Example: 1/10/2021
* LLL - Specified Date - Example: March 12 2020 4:02 AM
* LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM
* dddd - Day - Example: Friday
* HH - Hour - Example: 15

::: tip Other Timezone
Date functions uses on default UTC timezone,but you can change it [Learn More](./timezone.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="formatDate" vertical="middle" /> 
