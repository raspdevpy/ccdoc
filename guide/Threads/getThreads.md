# $getThreads
Get all threads from a channel.

#### Usage: 
`$getThreads[Channel ID;Type to return (name/id);Seperator (default:, )]`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $getThreads[$channelID;name; | ]
	</discord-message>
	<discord-message :bot="true" author="Custom Command" role-color="#0099ff" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Cat Disscussion | Help
	</discord-message>
</discord-messages>

::: tip
This Command supports Curl Arguments, a link to the page explaining it, will get added when done
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="Get functions/ get thread" vertical="middle" /> <Badge type="tip" text="Threads" vertical="middle" /> <Badge type="tip" text="Info Threads" vertical="middle" />