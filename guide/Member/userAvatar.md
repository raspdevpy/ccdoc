# $userAvatar
Returns a user avatar by a given userID.

#### Usage: `$userAvatar[userID;size;dynamic;return server avatar instead (yes/no, default is no)]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $userAvatar[$userID[Custom Command]]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        <DiscordReaction image="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp"/>
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="userID" vertical="middle" /> <Badge type="tip" text="user avatar" vertical="middle" />