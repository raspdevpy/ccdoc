# $newTicket

Create a new support ticket. This function allows users to easily open tickets for assistance, which can be closed later using the `$closeTicket` function.

#### Usage: `$newTicket[ticket name;ticket message (optional);categoryID (optional);return ticket ID (yes/no) (optional);error message (optional)]`

**Parameters:**

*   `ticket name`: The name of the ticket channel. Consider using `$userTag` to personalize it (e.g., `$userTag-Ticket`).
*   `ticket message (optional)`:  A message to be sent in the newly created ticket channel. If left blank, no message will be sent.
*   `categoryID (optional)`:  The ID of the category to create the ticket under. If not specified, it will create the ticket in the server. You can find category ID by enabling developer mode under discord settings.
*   `return ticket ID (yes/no) (optional)`:  Specifies whether the function should return the ticket channel ID. Use `yes` to retrieve the ID for further processing, or `no` (or leave blank) to suppress it.
*   `error message (optional)`: An error message to display if the ticket creation fails.  This can help users understand why their ticket wasn't created.

**Example:**

```sh
!!exec $newTicket[$userTag-Ticket;Hello World!]
```

This command will:

1.  Create a new text channel named "[username]-Ticket" (where [username] is the user's Discord tag).
2.  Send the message "Hello World!" in the newly created ticket channel.

**Tips & Important Information:**

::: tip Ticket System
Take advantage of pre-built ticket system templates! You can find and clone highly customizable button-based ticket systems directly from the [dashboard](https://ccommandbot.com/dashboard). These templates simplify the process of setting up a robust ticket system.
:::

::: warning Category Permissions
By default, everyone can view the newly created ticket channel.  To restrict access and maintain privacy, adjust the permissions of the ticket category.  Specifically, **deny** the `View Channel` permission for the `@everyone` role within the ticket category.
:::

::: tip Note
Enhance your ticket messages by using embeds! Utilize the [Message Curl Format](../CodeReferences/ref.message_curl_format.md) to create rich, visually appealing messages within the ticket channel.
:::

##### Function Difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /><Badge type="tip" text="channel" vertical="middle" />