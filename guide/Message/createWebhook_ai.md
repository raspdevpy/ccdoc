# `$createWebhook`

Creates a webhook in a specified channel.

::: tip Webhooks
Webhooks are a simple way to send automated messages to different servers, potentially with custom user profiles.
:::

::: warning Permissions
The bot requires the `Manage Webhooks` permission in the target channel to execute this function successfully.
:::

#### Usage: `$createWebhook[channelID;name;avatarURL;returnWebhookID&Token (yes/no);separator]`

**Parameters:**

*   `channelID`: The ID of the channel where the webhook will be created.
*   `name`: The name of the webhook.
*   `avatarURL`: The URL of the avatar image for the webhook.
*   `returnWebhookID&Token (yes/no)`:  Specifies whether the function should return the webhook's ID and token after creation.  Use `yes` to return the ID and Token, and `no` to return nothing.
*   `separator`:  The separator used to delimit the webhook ID and token when `returnWebhookID&Token` is set to `yes`.

<br/>
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec $createWebHook[$channelid;WikiHook;https://cdn.discordapp.com/guilds/723032190719623289/users/327996784012034050/avatars/7aa9a46ad68d89c4eb8da9d39bbf7ba4.webp?size=2048;yes;/]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		94074xx.../O_BoAW...
	</discord-message>
</discord-messages>

**Example:**

In this example, a webhook named "WikiHook" is created in the channel specified by `$channelid`. The webhook is given a specific avatar. The command then returns the webhook ID and Token, separated by `/`.

##### Function difficulty: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Webhook" vertical="middle" /> <Badge type="tip" text="Creation" vertical="middle" />