# $findChannel
Searches for a channel, by ID or name.

#### Usage: 
`$findChannel[ID/mention/name;returnCurrentChannel (yes/no) (optional)]`

**If channel is found:**
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findChannel[bot-commands;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

**If channel is not found and the second argument is `"no"`:**
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findChannel[bot-cmnds;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>


::: tip Related Functions
[$channelExists](../Channel/channelExists.md) is used to tell if a channel ID exists.
:::

##### Function Difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="find" vertical="middle" /> <Badge type="tip" text="find Channel" vertical="middle" /> <Badge type="tip" text="search Channel" vertical="middle" /> 