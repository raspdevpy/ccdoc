# $eventEnd

Ends an active event using its unique ID.

## Description

The `$eventEnd` function allows you to terminate a currently running event.  You must provide the specific Event ID of the event you wish to stop.

## Usage

```
$eventEnd[Event ID]
```

**Parameters:**

*   `Event ID`:  The numerical ID of the event you want to end. You can typically find this ID when the event is created or through a list of active events.

## Example

To end an event with the ID `12345`, you would use:

```
$eventEnd[12345]
```

## Important Notes

*   Ensure that the `Event ID` you provide is correct and corresponds to an active event. Ending a non-existent or already completed event may result in an error.