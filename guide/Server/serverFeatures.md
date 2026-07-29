# serverFeatures

Returns the server features. This function returns a comma-separated list of features enabled on the server.

#### Usage: `$serverFeatures`

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $serverFeatures
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Preview Enabled, Threads Enabled, Member Verification Gate Enabled, New Thread Permissions, News, Community, Welcome Screen Enabled
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 