# $channel
get a specific information about a channel. 

#### Usage: 
`$channel[Channel ID;Option]`

`Option` can be
```
name, id, isdeleted, mention, position, rawposition, topic, type, created, timestamp, guildid, guildname, ismanageable, parentid, parentname, isviewable, isdeletable
```
#### Example:
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $channel[$channelID;name]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		cc-beta
	</discord-message>
</discord-messages>


::: tip Note
Option `type` return a type from this [list](../CodeReferences/ref.channel_types.md)
:::


##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="channel" vertical="middle" /> <Badge type="tip" text="create" vertical="middle" />
 