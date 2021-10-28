# $clear
Clears an amount of messages from given channelID and from specfic person or everyone

#### Usage: 
`$clear[amount;userid or everyone(optional);channelID (optional)]`

Before
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
		I'm a spammer, everyone shut up!
	</discord-message>
	<discord-message :bot="false" role-color="#4cfdc8" author="Good Moderator">
		!!exec $clear[10;746697359303508059] Channel Purged
	</discord-message>
</discord-messages>

After
<br/>
<discord-messages>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Channel Purged
	</discord-message>
</discord-messages>

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Bulk deleting" vertical="middle" /> <Badge type="tip" text="delete messages" vertical="middle" /> <Badge type="tip" text="Purge Channel" vertical="middle" /> <Badge type="tip" text="Clear Channel" vertical="middle" />