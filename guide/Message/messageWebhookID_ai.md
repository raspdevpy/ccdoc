# `$messageWebhookID`

Retrieves the ID of the webhook that sent the message.

#### Usage:

`$messageWebhookID`

This function requires no arguments and simply returns the webhook ID.

<br/>

<discord-messages>
  <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $messageWebhookID
  </discord-message>
  <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
    683630053686378498
  </discord-message>
</discord-messages>

**Example:** If a webhook with the ID `683630053686378498` sent the message, the function would return `683630053686378498`.

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="Webhook ID" vertical="middle" /> <Badge type="tip" text="Message" vertical="middle" />