# $findRole
Searches for a role, by ID or name

#### Usage: 
`$findRole[ID/mention/name;return current channelID, (yes/no) (Optional, default=yes)]`

If channel is found:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findRole[Mika#6359;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		869243919697846379
	</discord-message>
</discord-messages>

If channel is not found:
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $findRole[mika#6359;no]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		undefined
	</discord-message>
</discord-messages>

:::info

:::


::: tip Related Functions
[$roleID](../Role/roleID.md), to return a roleID by name of it
:::

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="find Role" vertical="middle" /> <Badge type="tip" text="Role ID" vertical="middle" /> <Badge type="tip" text="Roles" vertical="middle" /> <Badge type="tip" text="Search Roles" vertical="middle" /> <Badge type="tip" text="Found Roles" vertical="middle" /> 