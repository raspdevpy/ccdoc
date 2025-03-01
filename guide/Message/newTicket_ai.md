# $newTicket

Create a new support ticket that can be closed later using the $closeTicket function.

#### Usage: `$newTicket[ticket name;ticket message (optional);categoryID (optional);return ticket ID (yes/no) (optional);error message (optional)]`

**Parameters:**

*   **`ticket name`**: The name of the ticket channel to be created.  You can use user tags (e.g., `$usertag`) to personalize the name.
*   **`ticket message (optional)`**: The initial message sent to the newly created ticket channel.
*   **`categoryID (optional)`**:  The ID of the category to create the ticket channel under. If omitted, the ticket will be created in the default channel location.
*   **`return ticket ID (yes/no) (optional)`**: Determines whether the ticket's channel ID is returned after creation.  Set to `yes` to return the ID; otherwise, omit or set to `no`. This allows you to use the ID for further actions.
*   **`error message (optional)`**: A custom error message to display if the ticket creation fails. If omitted, a default error message will be shown.

**Example:**

This example creates a ticket named "[Username]-Ticket" and sends "Hello World!" as the initial message in the ticket channel:

```!!exec $newTicket[$usertag-Ticket;Hello World!]```

::: tip Looking for a complete ticket system?
We offer pre-built, customizable ticket system templates that include button-based interactions. You can easily clone these templates directly from the dashboard for a quick and comprehensive solution.
:::

::: tip Note
You can send a fully formatted embed as the ticket message using our [Message Curl Format](../CodeReferences/ref.message_curl_format.md).  This allows you to create visually appealing and informative ticket messages.
:::

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />
###### Tags: <Badge type="tip" text="ticket" vertical="middle" /> <Badge type="tip" text="support" vertical="middle" /> <Badge type="tip" text="channel" vertical="middle" />