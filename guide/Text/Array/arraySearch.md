# $arraySearch
To search for the index of a splitted value in `$textSplit` array

#### Usage: `$arraySearch[value]`
::: warning return the index if found otherwise -1
:::
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $textsplit[Wiki Mido Rake; ] {{ '\n' }} Wiki is the #$arraySearch[Wiki] in the leaderboard!	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Wiki is the #1 in the leaderboard!
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="array" vertical="middle" /> <Badge type="tip" text="search" vertical="middle" /> <Badge type="tip" text="textsplit" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" />