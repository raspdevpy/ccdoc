# $newTicket
Create a ticket, which can be closed using the `$closeTicket` function.

#### Usage: `$newTicket[ticket name;ticket message(optional);categoryID(optional);return ticket ID(yes/no)(optional);error message(optional)]`
<br/>


```sh
!!exec $newTicket[$usertag-Ticket;Hello World!]
```
This will create a ticket named "member-ticket" and send "Hello World!" in the ticket channel.

::: tip Ticket System
There are templates ,which you can clone directly from the dashboard, that includes button tickets. Highly customizable.
:::

::: warning Category Permissions
By default, everybody can view the ticket. To prevent this, go to the channel category's permissions and reject `View Channel` perms for `@everyone`.
:::

::: tip Note
You can send an embed using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /><Badge type="tip" text="channel" vertical="middle" />