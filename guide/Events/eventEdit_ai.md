# $eventEdit

Edit an existing scheduled event using its ID.

## Usage

This function allows you to modify various aspects of a scheduled event, such as its name, type, start and end times, description, and more.

```bash
$eventEdit[
  {event=Event ID to edit}
  {name=New event name}
  {type=New event type (e.g., external)}
  {start=New start timestamp}
  {end=New end timestamp}
  {desc=New description}
  {channel=New voice or stage channel ID}
  {location=New location}
  {cover=URL of the new event image (optional)}
  {reason=Reason for editing (for audit log)}
]
```

**Explanation of Parameters:**

*   **`event`**:  The ID of the scheduled event you want to edit. This is a required parameter.
*   **`name`**: The new name for the event.
*   **`type`**: The new type of event.  Examples include:
    *   `external`: An event happening outside of Discord.
*   **`start`**:  The new start timestamp for the event.  This should be a Unix timestamp (seconds since epoch).  Use a timestamp converter to find the correct value.
*   **`end`**: The new end timestamp for the event.  This should be a Unix timestamp. Use a timestamp converter to find the correct value.
*   **`desc`**: The new description for the event.
*   **`channel`**: The ID of the voice or stage channel where the event will be held (if applicable).
*   **`location`**: The new location for the event.
*   **`cover`**:  A URL pointing to the new image you want to use as the event's cover. This is optional.
*   **`reason`**:  The reason for editing the event. This will be recorded in the server's audit log.

## Important Notes:

*   You can only modify `start`, `type`, `location`, and `channel` if the event is *not* currently active (i.e., it hasn't started yet).

## Example:

This example demonstrates changing the name of an event with the ID `12345` to "My event new name!".

```bash
$eventEdit[
  {event=12345}
  {name=My event new name!}
]
```