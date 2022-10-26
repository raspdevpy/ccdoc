# $createWebhook
Creates a webhook for this channel

::: warning bot has to have manage webhooks permission
:::

#### Usage: `$createWebhook[channelID;name;avatar;returnWebhookID&Token (yes/no);separator]`
<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createWebHook[$channelid;WikiHook;https://cdn.discordapp.com/guilds/723032190719623289/users/327996784012034050/avatars/7aa9a46ad68d89c4eb8da9d39bbf7ba4.webp?size=2048;yes;/]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
94074xx.../O_BoAW...
	</discord-message>
</discord-messages>

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="" vertical="middle" /> <Badge type="tip" text="TAG 2" vertical="middle" />
