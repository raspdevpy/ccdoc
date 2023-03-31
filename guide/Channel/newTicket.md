# $newTicket
Create a ticket, which can then be closed using the `$closeTicket` function.

#### Usage: `$newTicket[ticket name;ticket message(optional);categoryID(optional);return ticket ID(yes/no)(optional);error message(optional)]`


```sh
!!exec $newTicket[$userTag-Ticket;Hello World!]
```

This will create a ticket named "member-ticket" and send the message "Hello World!" in the ticket channel.

::: tip Ticket System
There are templates which you can clone directly from the [dashboard](https://ccommandbot.com/dashboard), that includes button tickets, which are highly customizable.
:::

::: warning Category Permissions
By default, everybody can view the ticket. To prevent this, go to the Ticket Category's permissions and reject the `View Channel` permission for `@everyone`.
:::

::: tip Note
You can send an embed using the [Message Curl Format](../CodeReferences/ref.message_curl_format.md).
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /><Badge type="tip" text="channel" vertical="middle" />