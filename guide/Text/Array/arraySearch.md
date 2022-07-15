# $arraySearch
returns the index of the first occurrence of a value in an array from `$textsplit`

#### Usage: `$arraySearch[value]`
> returns the index of the first occurrence of the value or -1 if not found

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Wiki Mido Rake; ] {{ '\n' }} Wiki is the #$arraySearch[Wiki] in the leaderboard!	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Wiki is the #1 in the leaderboard!
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" />