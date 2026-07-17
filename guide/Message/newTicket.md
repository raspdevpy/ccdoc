# $newTicket
Create a ticket which can be closed using $closeTicket function

#### Usage: `$newTicket[ticket name;ticket message(optional);categoryID(optional);return ticket ID(yes/no)(optional);error message(optional)]`
<br/>
This will create a ticket named "Member-ticket" and send "Hello World!" in the ticket channel:

```!!exec $newTicket[$usertag-Ticket;Hello World!]```

::: tip Looking for tickets system
There are templates which you can clone directly from the dashboard, that includes button tickets. Higly customizable.
:::

::: tip Note
You can send embed using [Message Curl Format](../CodeReferences/ref.message_curl_format.md)
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /> <Badge type="tip" text="support" vertical="middle" /> <Badge type="tip" text="channel" vertical="middle" />
