# $closeTicket

Closes a ticket that was previously created by the bot using the [`$newTicket`](../Channel/newTicket.md) command. This is used to finalize and close a support or request ticket channel.

#### Usage: `$closeTicket[optional error message]`

`$closeTicket` can optionally take an error message as an argument. This message will be displayed if there's an issue closing the ticket (although in most cases the ticket will close without errors).

<br/>

**Example:**

This example demonstrates how to send a message informing the user about the ticket closure, wait for a short period, and then close the ticket.

```sh
$sendmessage[This ticket will be closed in 5 seconds.]
$wait[5s]
$closeTicket
```

**Explanation:**

*   `$sendmessage[This ticket will be closed in 5 seconds.]`: Sends a message to the ticket channel informing the user that the ticket will be closed shortly.
*   `$wait[5s]`: Pauses the script execution for 5 seconds, giving the user a chance to read the message.
*   `$closeTicket`: Closes the ticket channel.

##### Difficulty: <Badge type="tip" text="Easy" vertical="middle" />

###### Tags: <Badge type="tip" text="ticket" vertical="middle" /> <Badge type="tip" text="close" vertical="middle" />