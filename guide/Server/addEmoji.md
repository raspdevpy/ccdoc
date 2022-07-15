# $addEmoji
Adds an emoji to this guild. If role IDs are given, the emoji will only be usable by users with one of provided role IDs.

#### Usage: `$addEmoji[url;name;returnEmoji (yes/no)(optional);roleID1;roleID2;...]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $addEmoji[https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp;CustomCommandSupport;no]
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="add emoji" vertical="middle" /> <Badge type="tip" text="Emojis" vertical="middle" /> <Badge type="tip" text="Discord Emoji" vertical="middle" /> <Badge type="tip" text="Guild Emoji" vertical="middle" />