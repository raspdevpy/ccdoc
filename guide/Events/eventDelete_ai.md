# $eventDelete

Deletes an existing scheduled event.

## Usage

```bash
$eventDelete[event ID]
```

## Description

The `$eventDelete` function deletes a scheduled event using its unique event ID. This is useful for removing events that are no longer needed or were created in error.

**Parameters:**

*   `event ID`:  The unique identifier of the event you want to delete.  You can usually retrieve this ID when the event is created or by querying your event list (implementation depends on how events are being scheduled/stored).

**Important Considerations:**

*   Ensure you have the correct `event ID` before using this function.  Deleting the wrong event is permanent.
*   This function will only work if the bot has the necessary permissions to manage scheduled events.
*   Error handling is crucial. Implement checks to ensure the `event ID` exists and that the deletion was successful.

**Example:**

Let's say you have an event with the ID `1234567890`. To delete this event, you would use:

```bash
$eventDelete[1234567890]
```