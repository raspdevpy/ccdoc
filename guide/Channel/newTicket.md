# $newTicket
create a ticket , which can be closed using $closeTicket function

#### Usage: `$newTicket[ticket name;ticket message(optional);categoryID(optional);return ticket ID(yes/no)(optional);error message(optional)]`
<br/>
This will create a ticket named "Member-ticket" and send "Hello World!" in the ticket channel:

```sh
!!exec $newTicket[$usertag-Ticket;Hello World!]
```

::: tip Ticket System
There are templates ,which you can clone directly from the dashboard, that includes button tickets. Highly customizable.
:::

::: warning Category Permissions
Currently everybody can view the ticket.Go to the category settings of the ticket category and revoke perms for @everyone
:::

##### Function Difficultly: <Badge type="tip" text="Easy" vertical="middle" /> 
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /><Badge type="tip" text="channel" vertical="middle" />