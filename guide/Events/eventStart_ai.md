# $eventStart

Starts a scheduled event using its ID.

## Description

This function allows you to initiate a scheduled event immediately. You'll need to provide the specific ID of the event you wish to start.

## Usage

```bash
$eventStart[Event ID]
```

## Parameters

*   **Event ID:**  The unique identifier for the scheduled event you want to start. You can find this ID in your bot's settings or from other event-related functions (if available).  Make sure this ID is correct, otherwise the function will fail.

## Example

To start a scheduled event with the ID `my_event_123`, you would use the following:

```bash
$eventStart[my_event_123]
```

## Notes

*   This function will only work if the bot has the necessary permissions to manage scheduled events.
*   Make sure the Event ID is valid.
*   The event will run regardless of its originally scheduled time.